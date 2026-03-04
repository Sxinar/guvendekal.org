import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', 
  },
  collections: {
    docs: collection({
      label: 'Dökümanlar',
      slugField: 'title',
      // Starlight'ın ana döküman klasörü
      path: 'src/content/docs/guides/**/', 
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ 
          name: { label: 'Dosya Adı (URL)' } 
        }),
        // STARLIGHT FRONTMATTER ALANLARI
        // Starlight bu alanları dosyanın en üstünde (---) bekler.
        label: fields.text({ label: 'Görünür Başlık (Sidebar)', validation: { length: { min: 1 } } }),
        description: fields.text({ label: 'Açıklama (SEO için)', multiline: true }),
        template: fields.select({
          label: 'Sayfa Düzeni',
          options: [
            { label: 'Standart', value: 'doc' },
            { label: 'Geniş (Splash)', value: 'splash' },
          ],
          defaultValue: 'doc',
        }),
        // İÇERİK ALANI
        content: fields.markdoc({
          label: 'İçerik',
          extension: 'mdx',
        }),
      },
    }),
  },
});