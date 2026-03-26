"use server";
import postgres from 'postgres';
import { Task } from './definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
// 取得
export async function fetchTasks(): Promise<Task[]> {
	try {
		const data = await sql<Task[]>`
		SELECT
			id,
			title,
			TO_CHAR(start_time, 'HH24:MI') AS start_time,
			TO_CHAR(start_time + interval '30 minutes', 'HH24:MI') AS end_time,
			is_completed
		FROM tasks
		ORDER BY start_time ASC
		`;
		return data;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('タスクが取得できませんでした');
	}
}

export async function fetchTasksById(id: string) {
	try {
		const data = await sql<Task[]>`
			SELECT
			id,
			title,
			TO_CHAR(start_time, 'HH24:MI') AS start_time,
			TO_CHAR(start_time + interval '30 minutes', 'HH24:MI') AS end_time,
			is_completed
		FROM tasks
		WHERE id = ${id};
		`;

		const task = data.map((task) => ({
			...task,
		}));

		return task[0];
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('タスクが取得できませんでした');
	}
}

// 作成
export async function createTask(formData: FormData) {
	const title = formData.get('title');
	const start_time = formData.get('start_time');
	const is_completed = false;
	await sql`
		INSERT INTO tasks (title, start_time, is_completed)
		VALUES (${title as string}, ${start_time as string}, ${is_completed})
	`;
	revalidatePath('/');
	redirect('/');
}

// 更新
export async function updateTask(id: string, formData: FormData) {
	const title = formData.get('title');
	const start_time = formData.get('start_time');
	const is_completed = formData.get('is_completed')=== 'on';;
	await sql`
		UPDATE tasks
		SET
			title = ${title as string},
			start_time = ${start_time as string},
			is_completed = ${is_completed}
		WHERE id = ${id}
	`;
	revalidatePath('/');
	redirect('/');
}

// 削除
export async function deleteTask(id: string) {
	await sql`DELETE FROM tasks WHERE id = ${id}`;
	revalidatePath('/');
}