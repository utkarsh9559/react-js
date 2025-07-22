const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),  // ✅ fixed
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), // ✅ fixed
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), // ✅ fixed
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID), // ✅ fixed
};

export default conf;
