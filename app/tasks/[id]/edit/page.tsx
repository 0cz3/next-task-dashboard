
// import { fetchtitles, fetchtaskById } from '@/app/lib/data';

import { fetchTasksById, updateTask } from "@/app/lib/data";
import { CheckIcon, PencilIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// props: URLパラメータを受け取り Next15からawait必須
export default async function Page(props: {params: Promise<{id: string}>}) {
	 console.log(props)
	const params = await props.params;
	const id = params.id;
	const updateTaskWithId = updateTask.bind(null, id);
	const task = await (fetchTasksById(id))
	return (
		<main>
			<form action={updateTaskWithId}>
			<div className="rounded-md bg-gray-50 p-4 md:p-6">
				<div className="mb-4">
					<label htmlFor="start_time" className="mb-2 block text-sm font-medium">
						開始時間
					</label>
					<div className="relative">
						<input
							id="start_time"
							name="start_time"
							type="time"
							defaultValue={task.start_time}
							className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm"
							placeholder="タスク名"
						/>
						<PencilIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div>
				</div>
				<div className="mb-4">
					<label htmlFor="title" className="mb-2 block text-sm font-medium">
						タスク名
					</label>
					<div className="relative">
						<input
							id="title"
							name="title"
							type="text"
							defaultValue={task.title}
							className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm"
							placeholder="タスク名"
						/>
						<PencilIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div>
				</div>
				<div className="flex items-center">
					<input
						id="is_completed"
						name="is_completed"
						type="checkbox"
						defaultChecked={task.is_completed}
						className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
					/>
					<label
						htmlFor="is_completed"
						className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
					>
						完了<CheckIcon className="h-4 w-4" />
					</label>
				</div>
			</div>
			<div className="m-6 flex justify-end gap-4">
				<Link
					href="/"
					className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 cursor-pointer"
				>戻る</Link>
				<button className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 cursor-pointer" type="submit">変更</button>
			</div>
		</form>
		</main>
	);
}