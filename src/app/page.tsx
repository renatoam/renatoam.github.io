import Image from "next/image";
import { Input } from "./presentation/components/ui/input";
import { H1 } from "./presentation/components/ui/typography";
import { Button } from "./presentation/components/ui/button";
import { Avatar, AvatarImage } from "./presentation/components/ui/avatar";
// import { notion } from "@/lib/notion";

export default async function Home() {
  // Notion tests

  // const response = await notion.pages.retrieve({ page_id: 'b4b3b37391fe46c7ad142b470598e364' })
  // const response = await notion.blocks.children.list({ block_id: 'b4b3b37391fe46c7ad142b470598e364' })
  // const db = await notion.databases.query({
  //   database_id: 'd49c8b92293149a8a1f910cceb85fbfb'
  // })
  // console.log({ response: response.results.map(result => result[result.type].rich_text[0]?.plain_text ).join('\n') })
  // console.log({ db: db.results.map(result => `${result.properties.author.rich_text[0]?.plain_text} - ${result.properties.title.title[0].plain_text} - ${result.properties.description.rich_text[0]?.plain_text}`) })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <H1>Blog</H1>
        <Avatar>
          <AvatarImage width={200} height={200} src="https://res.cloudinary.com/otaner/image/upload/c_crop,g_auto,h_1400,w_1400/blog/iq6mlydlbnlkxp76odmd.jpg" />
            <Image width={80} height={80} src="https://res.cloudinary.com/otaner/image/upload/f_auto,q_auto/v1/blog/iq6mlydlbnlkxp76odmd" alt="Avatar" />
        </Avatar>
      </section>
      
      <section className="flex flex-col items-center gap-2 w-1/4">
        <Input />
        <Button className="w-1/6">Search</Button>
      </section>
    </main>
  );
}
