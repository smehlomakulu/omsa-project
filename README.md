Running the Solution.

System Requirements:
  Java Runtime Environment: 11
  Docker desktop
  
Backend API: Only
Navigate to the countries directory, i.e "omsa-project/countries" and Run the below commands:
  Build: docker build -t countries
  Run: docker run --name countries -p 8080:80

  Access API: 
    http://localhost:8080/countries - Returns full list of countries
    http://localhost:8080/countries/{name} - Return country details

To run Full solution (Frontend and Backend):
  Run command: docker-compose up
    
      

