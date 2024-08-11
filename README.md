# ApartmentManagementApp
- Language: Python, Javascript, HTML, CSS
- Database: MySQL
- Other: Django, React Native, Cloudinary, RealTimeChat (firebase)
- Payment: VIETQR

# The steps run the project for APIs
* Cloning the project
* Openning one of projects
* Reinstalling the libraries: pip install -r requirements.txt
* Checking database in settings.py and creating an empty database
* Executing the migrations: python manage.py migrate
* Creating an superuser (python manage.py createsuperuser) and * accessing admin page to test
# The steps run the project for Mobile App
* Executing the command: npm install
* Executing the command: npm start
* Choosing the options to run

# Function:
**User:**
- Login, register.
- After being issued an account, user must change their password and upload an avatar to use the app.
- Pay management fees, parking fees and other monthly service fees via the app: by transferring money to a fixed account and uploading the payment receipt to the app, or by making a direct online payment through the app.
- Look up paid invoices for the apartment.
- Register information for family members to receive a parking card.
- Each user will have an electronic locker on the app. When placing an order delivered to the apartment, admin will receive the package on behalf of the user if they are not at home. The user will see the list of items in their locker in a pending receipt status.
- Submit feedback to the management board regarding inappropriate activities or behaviors within the apartment complex for resolution.
- Participate in surveys conducted by admin.

**Admin:**
- Login
- Issue accounts to residents.
- After user receives the package, admin will update the status to received.
- Lock a user's account when the user transfers ownership of their apartment to someone else.
- Create survey forms regarding the cleanliness, facilities, and services.

**API, Swagger**
<img width="1446" alt="Ảnh màn hình 2024-08-11 lúc 16 59 28" src="https://github.com/user-attachments/assets/fdf77083-7b91-4de4-a82d-906b40e6c79b">
<img width="1169" alt="Ảnh màn hình 2024-08-11 lúc 16 59 46" src="https://github.com/user-attachments/assets/7044fa62-a465-41bd-a687-babae713b664">
<img width="1446" alt="Ảnh màn hình 2024-08-11 lúc 16 59 02" src="https://github.com/user-attachments/assets/cfa76d2d-ff9b-4ba7-8361-1ac1458f9f77">
