import { fetchTasks } from "./lib/data";
import { CreateTask } from "./ui/buttons";
import Table from "./ui/table";

export default async function Page() {
	return(
		<main>
			<div className="m-20 flex flex-col gap-4">
				<h1>今日のスケジュール</h1>
				<div className="flex items-center">
					<CreateTask />
				</div>
				<Table />
			</div>
		</main>
	)
}