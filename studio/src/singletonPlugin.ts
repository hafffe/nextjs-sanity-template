export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev: any, { creationContext }: any) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem: any) => !types.includes(templateItem.templateId)
          )
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev: any, { schemaType }:any) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }: any) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
}
