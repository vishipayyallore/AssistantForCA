using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Accountants.Web.Portal.Migrations
{
    public partial class psmcaFirstMigration_07151 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClientType",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrentYearStatus",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmailId",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FatherFullName",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LandLinePhone",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastFilingYear",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NatureOfBusiness",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PanNumber",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ResouceName",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Telephone",
                table: "Clients",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClientType",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "CurrentYearStatus",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "EmailId",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "FatherFullName",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "LandLinePhone",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "LastFilingYear",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "NatureOfBusiness",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "PanNumber",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "ResouceName",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Telephone",
                table: "Clients");
        }
    }
}
