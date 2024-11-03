import Header from "@/components/Header";
import MemberList from "@/components/MemberList";
import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="mx-auto max-w-lg px-4 py-6">
          <Header />
          <SignupForm />
          <MemberList />
        </div>
      </div>
    </div>
  );
}
