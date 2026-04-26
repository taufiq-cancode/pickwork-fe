export type ProjectType = {
  image: string
  title: string
  status: 'Published' | 'Private'
  category: string
}

export const projectsData: ProjectType[] = []