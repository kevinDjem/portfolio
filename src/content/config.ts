import { z, defineCollection } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    technologies: z.array(z.string()),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    date: z.date().optional(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    type: z.enum(['backend', 'frontend', 'fullstack', 'mobile', 'other']).optional(),
    images: z.array(z.string().url()).optional()
  })
})

export const collections = { projects: projectsCollection }
