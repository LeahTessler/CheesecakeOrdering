using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using reactcheesecakeordering.Data;
using System;

namespace reactcheesecakeordering.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly string _connectionString;

        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("addOrder")]
        [HttpPost]
        public void AddOrder(CheesecakeOrder order)
        {
            var repo = new OrdersRepository(_connectionString);
            repo.AddOrder(order);
            
        }

        [Route("getAll")]
        [HttpGet]
        public List<CheesecakeOrder> GetAll()
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetAll();

        }


        [Route("getOrder")]
        [HttpGet]
        public CheesecakeOrder GetOrder(int id)
        {
            var repo = new OrdersRepository(_connectionString);
            return repo.GetOrderById(id);

        }


    }
}
