import { H1, Paragraph } from "@/app/presentation/components/ui/typography";
import { databases } from "@/lib/appwrite";
import { marked } from "marked";
import Image from "next/image";

export default async function Post({ params }: { params: { id: string } }) {
  let post
  let content: string

  try {
    post = await databases.getDocument(
      process.env.APPWRITE_DBID ?? '',
      process.env.APPWRITE_POSTS_COLLECTION ??'',
      params.id
    )

    console.log(post.content)
    content = await marked(post.content)
  } catch (error) {
    console.error(error)
    return <p>Something wrong on Appwrite.</p>
  }

  if (!post) return <p>Post not found.</p>

  return (
    <main className="w-1/2 m-auto p-10">
      <H1>{post.title}</H1>
      <Paragraph>{post.preview}</Paragraph>
      <figure className="py-8">
        <Image width={1080} height={1080} src={post.image} alt={post.title} />
        <figcaption className="py-4">Dragon Ball by Akira Toriyama</figcaption>
      </figure>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  )
}
