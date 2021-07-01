# Trucks-Accenture-Challenge

This is a backend challenge. 
You can create multiple trucks and load or unload them. 
Every time you create a parcel, you have to specify the parcel weight and truck ID where you wanna put it. (Put "parcel_weight" and "truck_id" on the request body).
Even you can delete a specific parcel with his ID number. Just make a DELETE request with "parcel_id" on the body.
When you make a GET request to /trucks, you get all the trucks with an ID, total weight, parcels quantity and an array with all the parcels inside.
