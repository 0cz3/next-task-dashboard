import { fetchTasks } from '../lib/data';
import { DeleteTask, UpdateTask } from './buttons';

export default async function Table() {
	const tasks = await fetchTasks();

	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<table className="min-w-full text-gray-900 table">
					<thead className="rounded-lg text-left text-sm font-normal">
						<tr>
							<th scope="col" className="px-4 py-5 font-medium">
								時間
							</th>
							<th scope="col" className="px-3 py-5 font-medium">
								タスク
							</th>
							<th scope="col" className="px-3 py-5 font-medium">
								完了状態
							</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{tasks?.map((task) => (
							<tr
								key={task.id}
								className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
							>
								<td className="whitespace-nowrap py-3 pl-6 pr-3">
									{task.start_time} - {task.end_time}
								</td>
								<td className="whitespace-nowrap px-3 py-3">
									{task.title}
								</td>
								<td className="whitespace-nowrap px-3 py-3">
									{task.is_completed ? (
										<span className="text-green-600">● 完了</span>) : (<span className="text-orange-600">○ 未完了</span>
									)}
								</td>
								<td className="whitespace-nowrap py-3 pl-6 pr-3">
									<div className="flex justify-end gap-3">
										<UpdateTask id={task.id} />
										<DeleteTask id={task.id} />
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
