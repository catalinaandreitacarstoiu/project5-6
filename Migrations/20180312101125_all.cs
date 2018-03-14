using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace project56.Migrations
{
    public partial class all : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admindetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true),
                    Username = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admindetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Datadetails",
                columns: table => new
                {
                    dataId = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    productID = table.Column<string>(type: "text", nullable: true),
                    productName = table.Column<string>(type: "text", nullable: true),
                    purchases = table.Column<int>(type: "int4", nullable: false),
                    shoppingcart = table.Column<int>(type: "int4", nullable: false),
                    wishlist = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Datadetails", x => x.dataId);
                });

            migrationBuilder.CreateTable(
                name: "historydetails",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Date = table.Column<string>(type: "text", nullable: true),
                    Item_Number = table.Column<string>(type: "text", nullable: true),
                    amount = table.Column<int>(type: "int4", nullable: false),
                    order_id = table.Column<int>(type: "int4", nullable: false),
                    price = table.Column<string>(type: "text", nullable: true),
                    totalprice = table.Column<string>(type: "text", nullable: true),
                    user_id = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_historydetails", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "legodetails",
                columns: table => new
                {
                    Item_Number = table.Column<string>(type: "text", nullable: false),
                    Availability = table.Column<string>(type: "text", nullable: true),
                    CAD_MSRP = table.Column<string>(type: "text", nullable: true),
                    EUR_MSRP = table.Column<string>(type: "text", nullable: true),
                    GBP_MSRP = table.Column<string>(type: "text", nullable: true),
                    Image_URL = table.Column<string>(type: "text", nullable: true),
                    Minifigures = table.Column<string>(type: "text", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Packaging = table.Column<string>(type: "text", nullable: true),
                    Pieces = table.Column<string>(type: "text", nullable: true),
                    Subtheme = table.Column<string>(type: "text", nullable: true),
                    Theme = table.Column<string>(type: "text", nullable: true),
                    USD_MSRP = table.Column<string>(type: "text", nullable: true),
                    Year = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_legodetails", x => x.Item_Number);
                });

            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    monthID = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    month = table.Column<int>(type: "int4", nullable: false),
                    totalsales = table.Column<float>(type: "float4", nullable: false),
                    year = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.monthID);
                });

            migrationBuilder.CreateTable(
                name: "shoppingcartdetails",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Item_Number = table.Column<string>(type: "text", nullable: true),
                    amount = table.Column<int>(type: "int4", nullable: false),
                    price = table.Column<string>(type: "text", nullable: true),
                    user_id = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shoppingcartdetails", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Adress = table.Column<string>(type: "text", nullable: true),
                    EmailAdress = table.Column<string>(type: "text", nullable: true),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    Gender = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    UserName = table.Column<string>(type: "text", nullable: true),
                    country = table.Column<string>(type: "text", nullable: true),
                    date_of_birth = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "wishlistdetails",
                columns: table => new
                {
                    id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Item_Number = table.Column<string>(type: "text", nullable: true),
                    user_id = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_wishlistdetails", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "admindetails");

            migrationBuilder.DropTable(
                name: "Datadetails");

            migrationBuilder.DropTable(
                name: "historydetails");

            migrationBuilder.DropTable(
                name: "legodetails");

            migrationBuilder.DropTable(
                name: "Sales");

            migrationBuilder.DropTable(
                name: "shoppingcartdetails");

            migrationBuilder.DropTable(
                name: "UserDetails");

            migrationBuilder.DropTable(
                name: "wishlistdetails");
        }
    }
}
