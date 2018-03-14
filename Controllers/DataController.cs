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
	[Route("DataController")]
	public class DataController : Controller 
	{
		private readonly LegoContext _context;

		public DataController(LegoContext context)
		{
			_context = context;
		}

		[HttpGet("Data")]
		public ProductData[] allData()
		{
			return _context.Datas.ToArray();
		}

		[HttpGet("TopCart")]
		public ProductData[] TopCart() {
			var data = _context.Datas.OrderByDescending(n => n.shoppingcart).Take(5);
			return data.ToArray();
		}

		[HttpGet("TopWish")]
		public ProductData[] TopWish() {
			var data = _context.Datas.OrderByDescending(n => n.wishlist).Take(5);
			return data.ToArray();
		}

		[HttpGet("TopPurchase")]
		public ProductData[] TopPurchase() {
			var data = _context.Datas.OrderByDescending(n => n.purchases).Take(5);
			return data.ToArray();
		}

		[HttpPost("addCart/{_id}/{_productName}")]
		public void addCart(string _id, string _productName)
		{
			var item = _context.Datas.FirstOrDefault(d => d.productID == _id);
			if (item == null) {
				item = new ProductData() { productID = _id, productName = _productName, purchases = 0, shoppingcart = 1, wishlist = 0};
				_context.Datas.Add(item);
				_context.SaveChanges();
			}
			else {
			item.shoppingcart = item.shoppingcart + 1;
			_context.SaveChanges();
			}
		}

		[HttpPost("addWish/{_id}/{_productName}")]
		public void addWish(string _id, string _productName)
		{
			var item = _context.Datas.FirstOrDefault(d => d.productID == _id);
			if (item == null) {
				item = new ProductData() { productID = _id, productName = _productName, purchases = 0, shoppingcart = 0, wishlist = 1};
				_context.Datas.Add(item);
				_context.SaveChanges();
			}
			else {
			item.wishlist = item.wishlist + 1;
			_context.SaveChanges();
			}
		}

		[HttpPost("addpurchase/{_id}/{_productName}/{_amount}")]
		public void addPurchase(string _id, string _productName, int _amount)
		{
			var item = _context.Datas.FirstOrDefault(d => d.productID == _id);
			if (item == null) {
				item = new ProductData() { productID = _id, productName = _productName, purchases = _amount, shoppingcart = 0, wishlist = 0};
				_context.Add(item);
				_context.SaveChanges();
			}
			else {
				item.purchases = item.purchases + _amount;
				_context.SaveChanges();
			}
			Console.WriteLine("adding" + _amount + "to" + _productName);
		}

		private bool dataExists(string id)
		{
			return _context.Datas.Any(d => d.productID == id );
		}
	}
}