using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace project56.model
{
    public class LegoContext : DbContext
    {

        public DbSet<Lego> Legos { get; set; }
        public DbSet<ClassUser> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Wishlist> Wishlists { get; set; }
        public DbSet<Shoppingcart> Shoppingcarts { get; set; }
        public DbSet<History> Historys { get; set; }
        public DbSet<ProductData> Datas { get; set; }
        public DbSet<ClassSales> Monthlys { get; set; }


        //Added constructor to provide the connection to the database as a service (look at: startup.cs)
        public LegoContext(DbContextOptions<LegoContext> options) : base(options)
        {
        }


    }
    [Table("legodetails")]
    public class Lego
    {
        [Key]
        public string Item_Number { get; set; }
        public string Name { get; set; }
        public string Year { get; set; }
        public string Theme { get; set; }
        public string Subtheme { get; set; }
        public string Pieces { get; set; }
        public string Minifigures { get; set; }
        public string Image_URL { get; set; }
        public string GBP_MSRP { get; set; }
        public string USD_MSRP { get; set; }
        public string CAD_MSRP { get; set; }
        public string EUR_MSRP { get; set; }
        public string Packaging { get; set; }
        public string Availability { get; set; }
    }

    [Table("admindetails")]
    public class Admin
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Table("wishlistdetails")]
    public class Wishlist
    {
        [Key]
        public int id { get; set; }

        [ForeignKey("legodetails")]
        public string Item_Number { get; set; }

        [ForeignKey("UserDetails")]
        public int user_id { get; set; }

    }

    [Table("shoppingcartdetails")]
    public class Shoppingcart
    {
        [Key]
        public int id { get; set; }

        [ForeignKey("legodetails")]
        public string Item_Number { get; set; }

        [ForeignKey("UserDetails")]
        public int user_id { get; set; }
        public int amount {get;set;}
        public string price {get;set;}

    }

    [Table("historydetails")]
    public class History
    {
        [Key]
        public int id { get; set; }
        public int order_id {get;set;}
        public string Item_Number { get; set; }

        [ForeignKey("UserDetails")]
        public int user_id { get; set; }
        public int amount {get;set;}
        public string price {get;set;}
        public string totalprice{get;set;}
        public string Date { get; set; }
    }

    [Table("Datadetails")]
    public class ProductData {
        [Key]
        public int dataId { get; set; }
        public string productID { get; set; }
        public string productName { get; set; }
        public int purchases { get; set; }
        public int shoppingcart { get; set; }
        public int wishlist { get; set; }
    }


    [Table("UserDetails")]
    public class ClassUser
    {
        [Key]
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string EmailAdress { get; set; }
        public string Password { get; set; }
        public string Adress { get; set; }
        public string PhoneNumber { get; set; }
        public string country { get; set; }
        public string date_of_birth { get; set; }
        public string Gender { get; set; }
    }

    [Table("Sales")]
    public class ClassSales
    {
        [Key]
        public int monthID { get; set; }
        public int month { get; set; }
        public int year { get; set; }
        public float totalsales { get; set; }
    }

    public class purchases 
    {
        public string Item_Number { get; set; }

        public int count { get; set; }
    }
}