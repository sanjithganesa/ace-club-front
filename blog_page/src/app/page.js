import DaisyCards from "./components/cards1";
import Tabs from "./components/tabs";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Tabs/>
      <DaisyCards/>
    </main>
  );
}
