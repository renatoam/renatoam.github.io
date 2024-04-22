import { databases } from "@/lib/appwrite"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../presentation/components/ui/card"
import { Paragraph } from "../presentation/components/ui/typography"
import Image from "next/image"
import { Button } from "../presentation/components/ui/button"
import Link from "next/link"

export default async function Posts() {
  const posts = await databases.listDocuments(
    process.env.APPWRITE_DBID ?? '',
    process.env.APPWRITE_POSTS_COLLECTION ??''
  )
  const articles = posts.documents

  return (
    <section className="grid gap-10 grid-cols-auto-fit-300">
      {[...articles, ...articles, ...articles, ...articles, ...articles].map(article => (
        <Card key={article.$id}>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image width={200} height={200} src={article.thumbnail} alt={article.title} priority />
            <CardDescription>{article.preview}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button>
              <Link href={`/posts/${article.$id}`}>Read more</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}