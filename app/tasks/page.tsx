
import { createTask } from "@/app/lib/data";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// props: URLパラメータを受け取り Next15からawait必須
export default function Page() {
	return (
		<main>
			<form action={createTask}>
				<div className="rounded-md bg-gray-50 p-4">
					<div className="mb-4">
						<label htmlFor="start_time" className="mb-2 block text-sm font-medium">
							開始時間
						</label>
						<div className="relative">
							<input
								id="start_time"
								name="start_time"
								type="time"
								defaultValue="10:00"
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
								className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm"
								placeholder="タスク名"
							/>
							<PencilIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
						</div>
					</div>
				</div>
				<div className="m-6 flex justify-end gap-4">
					<Link
						href="/"
						className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
					>戻る</Link>
					<button className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" type="submit">作成</button>
				</div>
			</form>
		</main>
	);
};