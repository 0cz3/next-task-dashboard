import { deleteTask } from '../lib/data';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateTask() {
	return (
		<Link
			href={`/tasks`}
			className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500"
		>
			<span>追加</span>
			<PlusIcon className="ml-1 h-4"/>
		</Link>
	);
}

export function UpdateTask({ id }: { id: string }) {
	return (
		<Link
			href={`/tasks/${id}/edit`}
			className="rounded-md border p-2 hover:bg-gray-100"
		>
			<PencilIcon className="w-5" />
		</Link>
	);
}

export function DeleteTask({ id }: { id: string }) {
	const deleteTaskId = deleteTask.bind(null, id);
	return (
		<form action={deleteTaskId}>
			<button type="submit" className="rounded-md border p-2 cursor-pointer hover:bg-gray-100">
				<span className="sr-only">削除</span>
				<TrashIcon className="w-5" />
			</button>
		</form>
	);
}
