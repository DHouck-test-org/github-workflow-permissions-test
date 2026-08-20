import { print, printHtml } from "kolmafia";

export function main(...args: string[]): void {
	print("You have successfully built github-workflow-permissions-test!");
	printHtml(`You called it with <code>${args}</code>.`);
}
