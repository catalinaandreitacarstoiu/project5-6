﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using project56.model;
using System;

namespace project56.Migrations
{
    [DbContext(typeof(LegoContext))]
    partial class LegoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452");

            modelBuilder.Entity("project56.model.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Password");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("admindetails");
                });

            modelBuilder.Entity("project56.model.ClassSales", b =>
                {
                    b.Property<int>("monthID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("month");

                    b.Property<float>("totalsales");

                    b.Property<int>("year");

                    b.HasKey("monthID");

                    b.ToTable("Sales");
                });

            modelBuilder.Entity("project56.model.ClassUser", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Adress");

                    b.Property<string>("EmailAdress");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("UserName");

                    b.Property<string>("country");

                    b.Property<string>("date_of_birth");

                    b.HasKey("ID");

                    b.ToTable("UserDetails");
                });

            modelBuilder.Entity("project56.model.History", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Date");

                    b.Property<string>("Item_Number");

                    b.Property<int>("amount");

                    b.Property<int>("order_id");

                    b.Property<string>("price");

                    b.Property<string>("totalprice");

                    b.Property<int>("user_id");

                    b.HasKey("id");

                    b.ToTable("historydetails");
                });

            modelBuilder.Entity("project56.model.Lego", b =>
                {
                    b.Property<string>("Item_Number")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Availability");

                    b.Property<string>("CAD_MSRP");

                    b.Property<string>("EUR_MSRP");

                    b.Property<string>("GBP_MSRP");

                    b.Property<string>("Image_URL");

                    b.Property<string>("Minifigures");

                    b.Property<string>("Name");

                    b.Property<string>("Packaging");

                    b.Property<string>("Pieces");

                    b.Property<string>("Subtheme");

                    b.Property<string>("Theme");

                    b.Property<string>("USD_MSRP");

                    b.Property<string>("Year");

                    b.HasKey("Item_Number");

                    b.ToTable("legodetails");
                });

            modelBuilder.Entity("project56.model.ProductData", b =>
                {
                    b.Property<int>("dataId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("productID");

                    b.Property<string>("productName");

                    b.Property<int>("purchases");

                    b.Property<int>("shoppingcart");

                    b.Property<int>("wishlist");

                    b.HasKey("dataId");

                    b.ToTable("Datadetails");
                });

            modelBuilder.Entity("project56.model.Shoppingcart", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Item_Number");

                    b.Property<int>("amount");

                    b.Property<string>("price");

                    b.Property<int>("user_id");

                    b.HasKey("id");

                    b.ToTable("shoppingcartdetails");
                });

            modelBuilder.Entity("project56.model.Wishlist", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Item_Number");

                    b.Property<int>("user_id");

                    b.HasKey("id");

                    b.ToTable("wishlistdetails");
                });
#pragma warning restore 612, 618
        }
    }
}
