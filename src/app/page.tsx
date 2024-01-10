"use client";

import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-8 border-t items-center">
			<h1 className="text-xl text-card-foreground">Welcome to worklog</h1>
			<p className="text-muted-foreground">you'll going to be productive.</p>
			<Separator className="my-4" />
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2 min-w-[500px]  rounded">
					<Label htmlFor="task">Enter your task & task label</Label>
					<div className="flex gap-2">
						<Input type="text" id="task" placeholder="Enter any task..." />
						<ComboboxDemo />
					</div>
					<Button className="self-end">Add task</Button>
				</div>
			</div>
		</main>
	);
}

// Open form with cmd + j
