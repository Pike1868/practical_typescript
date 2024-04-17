// //Fetch Data Exercise
// import { z } from 'zod';
// const url = 'https://www.course-api.com/react-tours-project';

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
// });

// // extract the inferred type
// type Tour = z.infer<typeof tourSchema>;

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);

//     // Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const rawData: Tour[] = await response.json();
//     //Adding checks at runtime
//     const result = tourSchema.array().safeParse(rawData);
//     //Since safeparse won't directly trigger an error we need to check if the success property is not there we can throw an error
//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }
//     //if we are successful then we can return the data
//     console.log(result.success)
//     return result.data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : 'there was an error...';
//     console.log(errMsg);

//     // throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });