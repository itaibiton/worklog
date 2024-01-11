"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./input";
import { Plus } from "lucide-react";
import { Separator } from "./separator";
import { useState } from "react";
import { useToast } from "./use-toast";

const frameworks = [
	{
		value: "work",
		label: "Work",
	},
	{
		value: "personal",
		label: "Personal",
	},
];

export function ComboboxDemo() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");
	const [label, setLabel] = React.useState("");

	const { toast } = useToast();

	const [updatedFrameworks, setUpdatedFrameworks] = useState([...frameworks]);

	const addLabel = (label: { value: string; label: string }) => {
		console.log("here", label);
		if (updatedFrameworks.find((lb) => lb.value === label.value)) {
			toast({
				title: "Error",
				description: "This label already exists!",
			});
		} else {
			setUpdatedFrameworks((prev) => [
				...prev,
				{ label: label.label, value: label.value },
			]);
		}
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="justify-between"
				>
					{value
						? updatedFrameworks.find((framework) => framework.value === value)
								?.label
						: "Select label..."}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0">
				<Command>
					<CommandInput placeholder="Search label..." className="h-9" />
					<CommandEmpty>No label found.</CommandEmpty>
					<CommandGroup className="px-0 pt-2">
						{updatedFrameworks.map((framework) => (
							<CommandItem
								key={framework.value}
								value={framework.value}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? "" : currentValue);
									setOpen(false);
								}}
							>
								<p className="px-2">{framework.label}</p>
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										value === framework.value ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
						))}
						<Separator className="my-2" />
						<CommandItem key="Command add">
							<div className="flex gap-1 items-center w-full">
								<Input
									placeholder="Add new label..."
									onChange={(e) => setLabel(e?.target?.value)}
									className="w-full"
								/>
								<Button
									onClick={() => addLabel({ label: label, value: label })}
									variant="ghost"
									className="p-1"
									type="submit"
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											addLabel({ label: label, value: label });
										}
									}}
								>
									<Plus width={16} height={16} />
								</Button>
							</div>
						</CommandItem>
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
