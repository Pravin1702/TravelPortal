using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using TravelAPI.Models;

namespace TravelAPI.Services
{
    public class RequestServices
    {
        SqlConnection conn;
        public RequestServices(IConfiguration configuration)
        {
            string strCon = configuration.GetConnectionString("conn");
            conn = new SqlConnection(strCon);
        }

        public async Task<Request> Manager(Request request)
        {
            SqlCommand cmd = new SqlCommand("proc_managerapprovel", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@tid", request.TravelId);
            cmd.Parameters.AddWithValue("@mngapp", request.managerapp);
            if (conn.State == ConnectionState.Open)
                conn.Close();
            try
            {
                conn.Open();
                int Result = cmd.ExecuteNonQuery();
                if (Result > 0)
                    return request;
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


        public async Task<Request> DeptHead(Request request)
        {
            SqlCommand cmd = new SqlCommand("proc_deptheadapprovel", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@tid", request.TravelId);
            cmd.Parameters.AddWithValue("@deptapp", request.departmentapp);
            if (conn.State == ConnectionState.Open)
                conn.Close();
            try
            {
                conn.Open();
                int Result = cmd.ExecuteNonQuery();
                if (Result > 0)
                    return request;
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


        public async Task<Request> Facility(Request request)
        {
            SqlCommand cmd = new SqlCommand("proc_PostTravel", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@tid", request.TravelId);
            cmd.Parameters.AddWithValue("@eId", request.EmployeeId);
            cmd.Parameters.AddWithValue("@uname", request.Name);
            cmd.Parameters.AddWithValue("@reason", request.reason);
            cmd.Parameters.AddWithValue("@proof", request.Proof);
            cmd.Parameters.AddWithValue("@loc", request.loc);
            cmd.Parameters.AddWithValue("@islocal", request.isLocal);
            cmd.Parameters.AddWithValue("@ndate", request.nDays);
            cmd.Parameters.AddWithValue("@fromdate", request.fromDate);
            cmd.Parameters.AddWithValue("@todate", request.toDate);
            cmd.Parameters.AddWithValue("@ticket", request.Ticket);
            if (conn.State == ConnectionState.Open)
                conn.Close();
            try
            {
                conn.Open();
                int Result = cmd.ExecuteNonQuery();
                if (Result > 0)
                    return request;
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


        public async Task<Request> Employee(Request request)
        {
            SqlCommand cmd = new SqlCommand("proc_OnlineTravel", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@eId", request.EmployeeId);
            cmd.Parameters.AddWithValue("@uname", request.Name);
            cmd.Parameters.AddWithValue("@reason", request.reason);
            cmd.Parameters.AddWithValue("@proof", request.Proof);
            cmd.Parameters.AddWithValue("@loc", request.loc);
            cmd.Parameters.AddWithValue("@islocal", request.isLocal);
            cmd.Parameters.AddWithValue("@ndate", request.nDays);
            cmd.Parameters.AddWithValue("@fromdate", request.fromDate);
            cmd.Parameters.AddWithValue("@todate", request.toDate);
            cmd.Parameters.AddWithValue("@mngapp", request.managerapp);
            cmd.Parameters.AddWithValue("@deptapp", request.departmentapp);
            if (conn.State == ConnectionState.Open)
                conn.Close();
            try
            {
                conn.Open();
                int Result = cmd.ExecuteNonQuery();
                if (Result > 0)
                    return request;
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

        public IEnumerable<Request> GetAllManager()
        {
            SqlDataAdapter da = new SqlDataAdapter("proc_GetAllonlinemanager", conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataSet ds = new DataSet();
            da.Fill(ds);
            List<Request> productss = new List<Request>();
            Request product;
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                product = new Request();
                product.TravelId = Convert.ToInt32(item[0].ToString());
                product.EmployeeId = Convert.ToInt32(item[1].ToString());
                product.Name = item[2].ToString();
                product.reason = item[3].ToString();
                product.Proof = item[4].ToString();
                product.loc = item[5].ToString();
                product.isLocal = item[6].ToString();
                product.nDays = Convert.ToInt32(item[7].ToString());
                product.fromDate = item[8].ToString();
                product.toDate = item[9].ToString();
                product.managerapp = Convert.ToInt32(item[10].ToString());
                product.departmentapp = Convert.ToInt32(item[11].ToString());
                productss.Add(product);
            }
            return productss;
        }

        public IEnumerable<Request> GetAllHead()
        {
            SqlDataAdapter da = new SqlDataAdapter("proc_GetAllonlinedepartment", conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataSet ds = new DataSet();
            da.Fill(ds);
            List<Request> productss = new List<Request>();
            Request product;
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                product = new Request();
                product.TravelId = Convert.ToInt32(item[0].ToString());
                product.EmployeeId = Convert.ToInt32(item[1].ToString());
                product.Name = item[2].ToString();
                product.reason = item[3].ToString();
                product.Proof = item[4].ToString();
                product.loc = item[5].ToString();
                product.isLocal = item[6].ToString();
                product.nDays = Convert.ToInt32(item[7].ToString());
                product.fromDate = item[8].ToString();
                product.toDate = item[9].ToString();
                product.managerapp = Convert.ToInt32(item[10].ToString());
                product.departmentapp = Convert.ToInt32(item[11].ToString());
                productss.Add(product);
            }
            return productss;
        }

        public IEnumerable<Request> GetAllfacility()
        {
            try
            {
                SqlDataAdapter da = new SqlDataAdapter("proc_GetAllonlinefacility", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                da.Fill(ds);
                List<Request> productss = new List<Request>();
                Request product;
                foreach (DataRow item in ds.Tables[0].Rows)
                {
                    product = new Request();
                    product.TravelId = Convert.ToInt32(item[0].ToString());
                    product.EmployeeId = Convert.ToInt32(item[1].ToString());
                    product.Name = item[2].ToString();
                    product.reason = item[3].ToString();
                    product.Proof = item[4].ToString();
                    product.loc = item[5].ToString();
                    product.isLocal = item[6].ToString();
                    product.nDays = Convert.ToInt32(item[7].ToString());
                    product.fromDate = item[8].ToString();
                    product.toDate = item[9].ToString();
                    productss.Add(product);
                }
                return productss;
            }
            catch(Exception e)
            {
                Debug.Write(e.Message);
            }
            return null;
        }

        public IEnumerable<Request> GetAll()
        {
            SqlDataAdapter da = new SqlDataAdapter("proc_GetAllPostRequest", conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataSet ds = new DataSet();
            da.Fill(ds);
            List<Request> productss = new List<Request>();
            Request product;
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                product = new Request();
                product.TravelId = Convert.ToInt32(item[0].ToString());
                product.EmployeeId = Convert.ToInt32(item[1].ToString());
                product.Name = item[2].ToString();
                product.reason = item[3].ToString();
                product.Proof = item[4].ToString();
                product.loc = item[5].ToString();
                product.isLocal = item[6].ToString();
                product.nDays = Convert.ToInt32(item[7].ToString());
                product.fromDate = item[8].ToString();
                product.toDate = item[9].ToString();
                product.Ticket = item[10].ToString();
                productss.Add(product);
            }
            return productss;
        }

    }
}
