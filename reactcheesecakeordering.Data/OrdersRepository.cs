using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactcheesecakeordering.Data
{
    public class OrdersRepository
    {
        private readonly string _connectionString;

        public OrdersRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddOrder(CheesecakeOrder order)
        {
            using var context = new reactcheesecakeorderingDataContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }

        public List<CheesecakeOrder> GetAll()
        {
            using var context = new reactcheesecakeorderingDataContext(_connectionString);
            return context.Orders.ToList();

        }

        public CheesecakeOrder GetOrderById(int id)
        {
            using var context = new reactcheesecakeorderingDataContext(_connectionString);
            return context.Orders.FirstOrDefault(order => order.Id == id);
        }


    }
}
