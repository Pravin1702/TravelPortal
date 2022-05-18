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
            cmd.Parameters.AddWithValue("@loc", request.loc);
            cmd.Parameters.AddWithValue("@islocal", request.isLocal);
            cmd.Parameters.AddWithValue("@ndate", request.nDays);
            cmd.Parameters.AddWithValue("@fromdate", request.fromDate);
            cmd.Parameters.AddWithValue("@todate", request.toDate);
            cmd.Parameters.AddWithValue("@ticketid", request.TicketId);
            cmd.Parameters.AddWithValue("@vecname", request.vehicleName);
            cmd.Parameters.AddWithValue("@traveltime", request.TicketTime);
            cmd.Parameters.AddWithValue("@travelloc", request.TravelLocation);
            cmd.Parameters.AddWithValue("@hotalname", request.hotalName);
            cmd.Parameters.AddWithValue("@hotalroomid", request.hotalroomnumber);
            cmd.Parameters.AddWithValue("@cabname", request.cabname);
            cmd.Parameters.AddWithValue("@cabtime", request.cabtime);
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

        public async Task<Request> facilityapprovel(Request request)
        {
            SqlCommand cmd = new SqlCommand("proc_GetAllonlinefacilityclose", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@tid", request.TravelId);
            cmd.Parameters.AddWithValue("@facilityapp", request.status);
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
            cmd.Parameters.AddWithValue("@loc", request.loc);
            cmd.Parameters.AddWithValue("@islocal", request.isLocal);
            cmd.Parameters.AddWithValue("@ndate", request.nDays);
            cmd.Parameters.AddWithValue("@fromdate", request.fromDate);
            cmd.Parameters.AddWithValue("@todate", request.toDate);
            cmd.Parameters.AddWithValue("@mngapp", request.managerapp);
            cmd.Parameters.AddWithValue("@deptapp", request.departmentapp);
            cmd.Parameters.AddWithValue("@status", request.status);
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
                product.loc = item[4].ToString();
                product.isLocal = item[5].ToString();
                product.nDays = Convert.ToInt32(item[6].ToString());
                product.fromDate = item[7].ToString();
                product.toDate = item[8].ToString();
                product.managerapp = item[9].ToString();
                product.departmentapp = item[10].ToString();
                product.status = item[11].ToString();
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
                product.loc = item[4].ToString();
                product.isLocal = item[5].ToString();
                product.nDays = Convert.ToInt32(item[6].ToString());
                product.fromDate = item[7].ToString();
                product.toDate = item[8].ToString();
                product.managerapp = item[9].ToString();
                product.departmentapp = item[10].ToString();
                product.status = item[11].ToString();
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
                    product.loc = item[4].ToString();
                    product.isLocal = item[5].ToString();
                    product.nDays = Convert.ToInt32(item[6].ToString());
                    product.fromDate = item[7].ToString();
                    product.toDate = item[8].ToString();
                    product.managerapp = item[9].ToString();
                    product.departmentapp = item[10].ToString();
                    product.status = item[11].ToString();
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
        
        public IEnumerable<Request> getbyidfacility(Request request)
        {
            int id = request.TravelId;
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
                    if (Convert.ToInt32(item[0].ToString()) == id)
                    {
                        product = new Request();
                        product.TravelId = Convert.ToInt32(item[0].ToString());
                        product.EmployeeId = Convert.ToInt32(item[1].ToString());
                        product.Name = item[2].ToString();
                        product.reason = item[3].ToString();
                        product.loc = item[4].ToString();
                        product.isLocal = item[5].ToString();
                        product.nDays = Convert.ToInt32(item[6].ToString());
                        product.fromDate = item[7].ToString();
                        product.toDate = item[8].ToString();
                        product.managerapp = item[9].ToString();
                        product.departmentapp = item[10].ToString();
                        product.status = item[11].ToString();
                        productss.Add(product);
                        
                    }
                  
                }
                return productss;
            }
            catch (Exception e)
            {
                Debug.Write(e.Message);
            }
            return null;
        }

        public IEnumerable<Request> GetAll()
        {
            SqlDataAdapter da = new SqlDataAdapter("proc_GetAllonlinerequest", conn);
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
                product.loc = item[4].ToString();
                product.isLocal = item[5].ToString();
                product.nDays = Convert.ToInt32(item[6].ToString());
                product.fromDate = item[7].ToString();
                product.toDate = item[8].ToString();
                product.managerapp = item[9].ToString();
                product.departmentapp = item[10].ToString();
                product.status = item[11].ToString();
                productss.Add(product);
            }
            return productss;
        }
        
        public IEnumerable<Request> EmployeebyId(Request request)
        {
            int id = request.EmployeeId;
            SqlDataAdapter da = new SqlDataAdapter("proc_GetAllonlinerequest", conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataSet ds = new DataSet();
            da.Fill(ds);
            List<Request> productss = new List<Request>();
            Request product;
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                if(Convert.ToInt32(item[1].ToString())==id)
                {
                    product = new Request();
                    product.TravelId = Convert.ToInt32(item[0].ToString());
                    product.EmployeeId = Convert.ToInt32(item[1].ToString());
                    product.Name = item[2].ToString();
                    product.reason = item[3].ToString();
                    product.loc = item[4].ToString();
                    product.isLocal = item[5].ToString();
                    product.nDays = Convert.ToInt32(item[6].ToString());
                    product.fromDate = item[7].ToString();
                    product.toDate = item[8].ToString();
                    product.managerapp = item[9].ToString();
                    product.departmentapp = item[10].ToString();
                    product.status = item[11].ToString();
                    productss.Add(product);

                }
              
            }
            return productss;
        }
        
        public IEnumerable<Request> GetAllPosttravel()
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
                product.loc = item[4].ToString();
                product.isLocal = item[5].ToString();
                product.nDays = Convert.ToInt32(item[6].ToString());
                product.fromDate = item[7].ToString();
                product.toDate = item[8].ToString();
                product.TicketId = item[9].ToString();
                product.vehicleName = item[10].ToString();
                product.TicketTime = item[11].ToString();
                product.TravelLocation = item[12].ToString();
                product.hotalName = item[13].ToString();
                product.hotalroomnumber = item[14].ToString();
                product.cabname = item[15].ToString();
                product.cabtime = item[16].ToString();
                productss.Add(product);
            }
            return productss;
        }

        public IEnumerable<Request> postEmployeebyId(Request request)
        {
            int id = request.EmployeeId;
            SqlDataAdapter da = new SqlDataAdapter("proc_GetAllPostRequest", conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataSet ds = new DataSet();
            da.Fill(ds);
            List<Request> productss = new List<Request>();
            Request product;
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                if (Convert.ToInt32(item[1].ToString()) == id)
                {
                    product = new Request();
                    product.TravelId = Convert.ToInt32(item[0].ToString());
                    product.EmployeeId = Convert.ToInt32(item[1].ToString());
                    product.Name = item[2].ToString();
                    product.reason = item[3].ToString();
                    product.loc = item[4].ToString();
                    product.isLocal = item[5].ToString();
                    product.nDays = Convert.ToInt32(item[6].ToString());
                    product.fromDate = item[7].ToString();
                    product.toDate = item[8].ToString();
                    product.TicketId = item[9].ToString();
                    product.vehicleName = item[10].ToString();
                    product.TicketTime = item[11].ToString();
                    product.TravelLocation = item[12].ToString();
                    product.hotalName = item[13].ToString();
                    product.hotalroomnumber = item[14].ToString();
                    product.cabname = item[15].ToString();
                    product.cabtime = item[16].ToString();
                    productss.Add(product);

                }

            }
            return productss;
        }

    }
}
