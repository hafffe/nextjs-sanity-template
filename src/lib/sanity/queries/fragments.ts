export const grid = `
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

export const blockContent = `
  _type == 'blockContent' => {
    ...
  }
`;

export const mainImage = `
  _type == 'mainImage' => {
    ...
  }
`;

export const youtube = `
  _type == 'youtube' => {
    ...
  }
`;
