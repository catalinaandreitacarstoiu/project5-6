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
    [Route("ShoppingcartController")]
    public class ShoppingcartController : Controller
    {
        private readonly LegoContext _context;

        public ShoppingcartController(LegoContext context)
        {
            _context = context;
        }


        [HttpGet("Shoppingcart")]
        public Shoppingcart[] allShoppingcart()
        {
            return _context.Shoppingcarts.ToArray();
        }

        [HttpGet("Shoppingcartalert/{item_number}/{user_id}")]
        public Shoppingcart[] ShoppingcartAlert(string item_number, int user_id)
        {
            var alert = from _alert in _context.Shoppingcarts
                        where _alert.Item_Number == item_number && _alert.user_id == user_id
                        select _alert;

            return alert.ToArray();
        }

        [HttpGet("CorrectUser/{user_id}")]
        public Shoppingcart[] CorrectUser(int user_id)
        {
            var user = from _user in _context.Shoppingcarts
                       where _user.user_id == user_id
                       select _user;

            return user.ToArray();
        }

        [HttpPost("Amount/{item_number}/{user_id}")]
        public void Amount(string item_number, int user_id)
        {
            // Shoppingcart newamount = new Shoppingcart()
            // {
            //     Item_Number = item_number
            //                                 ,
            //     amount = amount,
            //     user_id = user_id
            // };
            // _context.Shoppingcarts.Update(newamount);
            // _context.Entry(newamount);
            // _context.SaveChanges();

            var am = _context.Shoppingcarts.FirstOrDefault(d => d.Item_Number == item_number && d.user_id == user_id);
            am.amount = am.amount + 1;

            _context.SaveChanges();
        }

        [HttpPost("AmountMin/{item_number}/{user_id}")]
        public void AmountMin(string item_number, int user_id)
        {
            // Shoppingcart newamount = new Shoppingcart()
            // {
            //     Item_Number = item_number
            //                                 ,
            //     amount = amount,
            //     user_id = user_id
            // };
            // _context.Shoppingcarts.Update(newamount);
            // _context.Entry(newamount);
            // _context.SaveChanges();

            var am = _context.Shoppingcarts.FirstOrDefault(d => d.Item_Number == item_number && d.user_id == user_id);
            if (am.amount <= 1)
            {
                am.amount = am.amount;
            }
            else
            {
                am.amount = am.amount - 1;
            }
            

            _context.SaveChanges();
        }


        [HttpPost("CreateShoppingcart/{Item_Number}/{user_id}/{amount}/{price}")]
        public void CreateShoppingcart(string Item_Number, int user_id, int amount, string price)
        {
            Shoppingcart newwishlist = new Shoppingcart()
            {
                Item_Number = Item_Number,
                user_id = user_id,
                amount = amount,
                price = price
            };
            _context.Shoppingcarts.Add(newwishlist);
            _context.SaveChanges();
        }

        [HttpPut("Update/{Item_Number}/{user_id}")]
        public void Update(string Item_Number, int user_id)
        {

            Shoppingcart updatewishlist = new Shoppingcart()
            {
                Item_Number = Item_Number,
                user_id = user_id
            };
            _context.Update(updatewishlist);
            _context.Entry(updatewishlist);
            _context.SaveChanges();
        }

        [HttpDelete("Delete/{user_id}/{Item_Number}")]
        public void Delete(int user_id, string Item_Number)
        {
            var user = from _user in _context.Shoppingcarts
                       where _user.user_id == user_id && _user.Item_Number == Item_Number
                       select _user;
            _context.Shoppingcarts.Remove(user.FirstOrDefault());
            _context.SaveChanges();
        }

        [HttpDelete("DeleteUserSC/{user_id}")]
        public void DeleteUserSC(int user_id)
        {
            var user = from _user in _context.Shoppingcarts
                       where _user.user_id == user_id
                       select _user;
            var all = user.ToArray();
            for (int i = all.Length -1; i >=0; i--)
            {
                _context.Shoppingcarts.Remove(all[i]);
            }
            _context.SaveChanges();
        }
    }
}
