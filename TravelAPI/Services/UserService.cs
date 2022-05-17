using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using TravelAPI.Models;

namespace TravelAPI.Services
{
    public class UserService
    {
        SqlConnection conn;
        public UserService(IConfiguration configuration)
        {
            string strCon = configuration.GetConnectionString("conn");
            conn = new SqlConnection(strCon);
        }
        public async Task<User> Register(User item)
        {
            SqlCommand cmd = new SqlCommand("proc_InsertEmployee", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@uname", item.Name);
            cmd.Parameters.AddWithValue("@upass", item.Password);
            cmd.Parameters.AddWithValue("@urole", item.Role);
            cmd.Parameters.AddWithValue("@uage", item.Age);
            cmd.Parameters.AddWithValue("@ubrd", item.birthday);
            cmd.Parameters.AddWithValue("@ugen", item.gender);
            cmd.Parameters.AddWithValue("@@umobile", item.Mobile);
            cmd.Parameters.AddWithValue("@uemail", item.Email);
            cmd.Parameters.AddWithValue("@uadrs", item.Address);
            cmd.Parameters.AddWithValue("@umanagerid", item.ManagerId);
            cmd.Parameters.AddWithValue("@udeptid", item.DepartmentId);
            cmd.Parameters.AddWithValue("@udptheadid", item.DeprtmentHeadId);
            if (conn.State == ConnectionState.Open)
                conn.Close();
            try
            {
                conn.Open();
                int Result = cmd.ExecuteNonQuery();
                if (Result > 0)
                    return item;
            }
            catch (Exception e)
            {
                Debug.Write(e.Message);
            }
            finally
            {
                conn.Close();
            }
            return null;
        }

        public User DeleteUser(string key)
        {
            throw new NotImplementedException();
        }

        public async Task<User> Login(User user)
        {
            SqlCommand da = new SqlCommand("proc_LoginEmployee", conn);
            da.CommandType = CommandType.StoredProcedure;
            da.Parameters.AddWithValue("@uname", user.Name);
            da.Parameters.AddWithValue("@upass", user.Password);
            conn.Open();
            SqlDataReader reader = await da.ExecuteReaderAsync();
            if (reader.Read())
            {
                DataSet dsProducts = new DataSet();
                user.EmployeeId = Convert.ToInt32(reader[0].ToString());
                user.Role = reader[3].ToString();
                user.Age = Convert.ToInt32(reader[4]);
                user.birthday = reader[5].ToString();
                user.gender = reader[6].ToString();
                user.Mobile = reader[7].ToString();
                user.Email = reader[8].ToString();
                user.Address = reader[9].ToString();
                user.ManagerId = reader[10].ToString();
                user.DepartmentId = reader[11].ToString();
                user.DeprtmentHeadId = reader[12].ToString();
                conn.Close();
                return user;

            }
            return null;
        }

        public User UpdatePassword(User item)
        {
            throw new NotImplementedException();
        }


        public IEnumerable<User> GetAll()
        {
            SqlDataAdapter da = new SqlDataAdapter("proc_GetAllEmployee", conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataSet ds = new DataSet();
            da.Fill(ds);
            List<User> productss = new List<User>();
            User product;
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                product = new User();
                product.EmployeeId = Convert.ToInt32(item[0].ToString());
                product.Name = item[1].ToString();
                product.Role = item[3].ToString();
                product.Age = Convert.ToInt32(item[4].ToString());
                product.birthday = item[5].ToString();
                product.gender = item[6].ToString();
                product.Mobile = item[7].ToString();
                product.Email = item[8].ToString();
                product.Address = item[9].ToString();
                product.ManagerId = item[10].ToString();
                product.DepartmentId = item[11].ToString();
                product.DeprtmentHeadId = item[12].ToString();
                productss.Add(product);
            }
            return productss;
        }
    }
}
