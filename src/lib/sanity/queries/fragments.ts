const grid = /* groq */ `
  _type == 'grid' => {
    ...,
    items[] {
      ...,
      ctas[] {
        ...,
        link->{link, slug}
      }
    }
  }
`;

const blockContent = /* groq */ `
  _type == 'blockContent' => {
    ...
  }
`;

const mainImage = /* groq */ `
  _type == 'mainImage' => {
    ...
  }
`;

const youtube = /* groq */ `
  _type == 'youtube' => {
    ...
  }
`;

export const pageBuilder = /* groq */ `
  pageBuilder[] {
    ...,
    ${blockContent},
    ${mainImage}
    ${grid}
    ${youtube}
  }
`;
