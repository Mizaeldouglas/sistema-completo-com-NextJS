// import * as Prismic from '@prismicio/client'

// export function getPrismicClient(req?: unknown){
// 	const prismic = Prismic.createClient('https://projeto-mizael.prismic.io/api/v2')

// 	return prismic
// }


import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown){
  const prismic = Prismic.client('https://projeto-mizael.prismic.io/api/v2', {
    req,
  })

  return prismic;
}