import { ModeToggle } from "@/components/custom/theme-provider";

export default function Home() {
  return (
    <main>
      <div className="fixed right-4 bottom-4">
        <ModeToggle />
      </div>
    </main>
  );
}
