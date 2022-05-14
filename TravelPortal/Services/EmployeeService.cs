using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using TravelPortal.Models;

namespace TravelPortal.Services
{
    public class EmployeeService
    {

        SqlConnection conn;
        public EmployeeService(IConfiguration configuration)
        {
            string strCon = configuration.GetConnectionString("conn");
            conn = new SqlConnection(strCon);
        }

        public Employee Login(Employee item)
        {
            try
            {
                SqlDataAdapter da = new SqlDataAdapter("proc_LoginEmployee", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@uname", item.Name);
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    string role = ds.Tables[0].Rows[0][0].ToString();
                    item.role = role;
                    return item;
                }
            }
            catch(Exception e)
            {
                Debug.Write(e.Message);
            }
            return null;
        }

        public Employee Register(Employee item)
        {
            SqlCommand cmd = new SqlCommand("proc_InsertEmployee", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@uname", item.Name);
            cmd.Parameters.AddWithValue("@upass", item.Password);
            cmd.Parameters.AddWithValue("@upasskey", item.Token);
            cmd.Parameters.AddWithValue("@urole", item.role);
            cmd.Parameters.AddWithValue("@uage", item.Age);
            cmd.Parameters.AddWithValue("@ubrd", item.birthday);
            cmd.Parameters.AddWithValue("@ugen", item.gender);
            cmd.Parameters.AddWithValue("@umobile", item.Mobile);
            cmd.Parameters.AddWithValue("@uemail", item.Email);
            cmd.Parameters.AddWithValue("@uadrs", item.Address);
            cmd.Parameters.AddWithValue("@umanagerid", item.ManagerId);
            cmd.Parameters.AddWithValue("@udeptid", item.DepartmentId);
            cmd.Parameters.AddWithValue("@urole", item.DeaprtmentHeadId);
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

    }
}
