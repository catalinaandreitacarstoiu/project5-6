using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using project56.model;

namespace project56.Controllers
{
    [Route("UserController")]
    public class UserController : Controller 
    {
        private readonly LegoContext _context;

        public UserController(LegoContext context) 
        {
            _context = context;
        }
        
        [HttpGet("Users")]
        public ClassUser[] allUsers() 
        {
            return _context.Users.ToArray();
        }

        [HttpPost("CreateUser/{firstName}/{lastName}/{userName}/{emailAdress}/{password}/{adress}/{phoneNumber}/{Country}/{Date_of_birth}/{gender}")]
        public ClassUser CreateUser(string firstName, string lastName, string userName, string emailAdress, string password, string adress, string phoneNumber, string Country, string Date_of_birth, string gender)
        {
            var item = _context.Users.FirstOrDefault(u => u.UserName == userName && u.EmailAdress == emailAdress);
            if (item == null)
            {
                ClassUser newuser = new ClassUser() {   
                                                    
                                                    FirstName = firstName,
                                                    LastName = lastName,
                                                    UserName = userName,
                                                    EmailAdress = emailAdress,
                                                    Password = password,
                                                    Adress = adress,
                                                    PhoneNumber = phoneNumber,
                                                    country = Country,
                                                    date_of_birth = Date_of_birth,
                                                    Gender = gender};
                _context.Users.Add(newuser);
                _context.SaveChanges();
                return newuser;
            }
            else {
                return new ClassUser() {                                                      
                                        FirstName = "0",
                                        LastName = "0",
                                        UserName = "0",
                                        EmailAdress = "0",
                                        Password = "0",
                                        Adress = "0",
                                        PhoneNumber = "0",
                                        country = "0",
                                        date_of_birth = "0",
                                        Gender = "0"};
            }
        }

        [HttpGet("Login/{username}/{password}")]
        public ClassUser Login(string username, string password) 
        {
            var loggingIn = _context.Users.FirstOrDefault(user => user.UserName == username && user.Password == password);
            if (loggingIn != null) {
                return loggingIn;
            }
            else {
                return new ClassUser() {    FirstName = "",
                                            LastName = "",
                                            UserName = "",
                                            EmailAdress = "",
                                            Password = "",
                                            Adress = "",
                                            PhoneNumber = "",
                                            country = "",
                                            date_of_birth = "",
                                            Gender = ""};
            }
        }
        [HttpPut("Update/{id}/{firstName}/{lastName}/{userName}/{emailAdress}/{password}/{adress}/{phoneNumber}/{Country}/{Date_of_birth}/{gender}")]
        public void Update(int id, string firstName, string lastName, string userName, string emailAdress, string password, string adress, string phoneNumber, string Country, string Date_of_birth, string gender)
        {
            ClassUser updateduser = new ClassUser() {   ID = id,
                                                        FirstName = firstName,
                                                        LastName = lastName,
                                                        UserName = userName,
                                                        EmailAdress = emailAdress,
                                                        Password = password,
                                                        Adress = adress,
                                                        PhoneNumber = phoneNumber,
                                                        country = Country,
                                                        date_of_birth = Date_of_birth,
                                                        Gender = gender};
            _context.Update(updateduser);
            _context.Entry(updateduser);
            _context.SaveChanges();
        }
    }
}