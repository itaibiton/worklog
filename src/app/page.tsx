"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ComboboxDemo } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu } from "@/components/ui/Menu";

import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
	const [date, setDate] = useState<Date>();

	return (
		<div className="flex min-h-screen flex-col p-8 border-t  min-w-screen items-center gap-4 lg:items-start lg:flex-row">
			<div className="max-w-[500px] w-full rounded-md">
				<h1 className="text-xl text-card-foreground">Welcome to worklog</h1>
				<p className="text-muted-foreground mb-8">
					you'll going to be productive.
				</p>
				<div className="flex flex-col gap-4 ">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<Label htmlFor="task">Enter your task</Label>
							<Textarea
								className="min-h-[100px]"
								placeholder="Enter your task description..."
							/>
						</div>
						<div className="flex flex-col gap-1 w-full">
							<Label htmlFor="task">Task label</Label>
							<ComboboxDemo />
						</div>
						<div className="flex flex-col gap-1">
							<Label htmlFor="task">Date</Label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant={"outline"}
										className={cn(
											" justify-start text-left font-normal",
											!date && "text-muted-foreground"
										)}
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date ? format(date, "PPP") : <span>Pick a date</span>}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						</div>

						<Button className="self-end">Add task</Button>
					</div>
				</div>
			</div>
			<Tabs defaultValue="done" className="max-w-[500px] w-full ">
				<TabsList>
					<TabsTrigger value="done">Done tasks</TabsTrigger>
					<TabsTrigger value="inprogress">In progress</TabsTrigger>
					<TabsTrigger value="backlog">Backlog</TabsTrigger>
				</TabsList>
				<TabsContent value="done">
					<div className="border rounded-md p-4 col-span-4 w-full">
						Done tasks
					</div>
				</TabsContent>
				<TabsContent value="inprogress">
					<div className="border rounded-md p-4 max-w-[500px] w-full">
						In progress tasks
					</div>
				</TabsContent>
				<TabsContent value="backlog">
					<div className="border rounded-md p-4 max-w-[500px] w-full">
						Backlog
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}

// Open form with cmd + j
