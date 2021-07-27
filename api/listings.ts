import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
// Get all listings

export const addListing = (
  listing: {
    title: string | Blob;
    price: string | Blob;
    category: { value: string | Blob; };
    description: string | Blob;
    images: any[];
    location: any;
  },
  onUploadProgress: (arg0: number) => void) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      // console.log(progress.loaded / progress.total),
      onUploadProgress(progress.loaded / progress.total),
  });
};   // Add a new listing

export default {
  getListings,
  addListing,
};

