/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP 1000 [Id]
      ,[FileNumber]
      ,[FullName]
      ,[ClientType]
      ,[CurrentYearStatus]
      ,[EmailId]
      ,[FatherFullName]
      ,[LandLinePhone]
      ,[LastFilingYear]
      ,[NatureOfBusiness]
      ,[PanNumber]
      ,[ResouceName]
      ,[Telephone]
  FROM [psmca].[dbo].[Clients]

  -- delete from [psmca].[dbo].[Clients]
  -- delete from [psmca].[dbo].[Clients] where Id='80e342abbab2424da9252d3dc55f7c69'