import Image from "next/image";
import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Avatar imgUrl="profile-1" name="John Doe" />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
