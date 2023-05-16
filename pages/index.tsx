import { Layout, Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';

function Home() {
  return (
    <Page className="flex flex-col lg:flex-row gap-12">
      <section className="flex flex-col gap-3 lg:w-2/3 z-999">
        <Text variant="h1">Hi, my name's Tyler Lyon.</Text>
        <Text className="text-zinc-600">
          I'm a Full-Stack Web Developer & App Maker + AI Engineer
        </Text>
        <Text variant="h2">Chat w/ MeGPT:</Text>
        <Chat />
      </section>
      <section className="flex flex-col gap-3 lg:w-1/3 relative">
        <div
          className="fixed inset-7 bg-center bg-right bg-contain bg-no-repeat z-0"
          style={{ backgroundImage: "url('/NTFY.png')" }}
        ></div>
      </section>
    </Page>
  );
}

export default Home;
