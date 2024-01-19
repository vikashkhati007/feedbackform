import FeedbackForm from "@/components/FeedbackForm";

export default function Home() {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-blue-400 to-blue-700 blur-sm h-screen -z-10" />
      <FeedbackForm />
    </section>
  );
}
