# ApartmentManagementApp
- Language: Python Django, React Native
- Database: MySQL
- Payment: VIETQR
- Test: Postman
- Other: Cloudinary, RealTimeChat (firebase)

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
- Real-time chat with admin and other users.

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

# User interface:
**Login and Register:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/b65ac57f-2f81-43c7-bf71-6aacc952f1ba">
<img width="350" height="700" src="https://github.com/user-attachments/assets/7aebdafc-b506-4819-a141-6623c29def19">

**Home and Profile:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/92d7fd22-2b82-4968-bf71-12dad03d76ba">
<img width="350" height="700" src="https://github.com/user-attachments/assets/d41e085d-34bc-4b67-b116-4fbcc0d617fe">

**Real-time chat:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/5131e84e-9e61-4c89-b57f-0e265ef29752">
<img width="350" height="700" src="https://github.com/user-attachments/assets/333345f7-ae7b-4442-8725-0579566a94d3">

**Register service:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/a30e71b1-ba73-4f39-a393-1121c362abd7">

**Payment invoices:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/090de0b4-f039-4b7b-b079-edbb03a9e454">
<img width="350" height="700" src="https://github.com/user-attachments/assets/c2427a24-c030-47a3-8c1b-f827c062345a">
<img width="350" height="700" src="https://github.com/user-attachments/assets/ee9c2338-664a-403a-b3e3-ce5057b29c91">
<img width="350" height="700" src="https://github.com/user-attachments/assets/65b64e0d-22b6-4336-93bb-1336726c929d">

**Register information for family members:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/bcf06fe8-ecd3-4fda-8be3-2e409b75dfb5">

**User's electronic locker:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/5d4f993b-24f4-4504-9049-62d96b41faec">

**User's feedback:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/fa27bf1c-e944-42c4-9f69-faa01bfb963d">
<img width="350" height="700" src="https://github.com/user-attachments/assets/f8f4ac43-2e1d-4dd4-a83f-e4a21045d6b4">

**Make surveys:**
<br></br>
<img width="350" height="700" src="https://github.com/user-attachments/assets/9edcda63-21d9-4afc-9f3b-7e26308237c5">
<img width="350" height="700" src="https://github.com/user-attachments/assets/549dc0e7-81a2-4005-9795-ca7f49bcea8b">
