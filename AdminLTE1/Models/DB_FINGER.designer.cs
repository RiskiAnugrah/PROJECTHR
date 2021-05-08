﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AdminLTE1.Models
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="DB_FINGER")]
	public partial class DB_FINGERDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    partial void InsertUSERINFO(USERINFO instance);
    partial void UpdateUSERINFO(USERINFO instance);
    partial void DeleteUSERINFO(USERINFO instance);
    partial void InsertTBL_T_SHIFTMAP(TBL_T_SHIFTMAP instance);
    partial void UpdateTBL_T_SHIFTMAP(TBL_T_SHIFTMAP instance);
    partial void DeleteTBL_T_SHIFTMAP(TBL_T_SHIFTMAP instance);
    partial void InsertTBL_T_EXTRACT_ABSEN(TBL_T_EXTRACT_ABSEN instance);
    partial void UpdateTBL_T_EXTRACT_ABSEN(TBL_T_EXTRACT_ABSEN instance);
    partial void DeleteTBL_T_EXTRACT_ABSEN(TBL_T_EXTRACT_ABSEN instance);
    #endregion
		
		public DB_FINGERDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["DB_FINGERConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public DB_FINGERDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public DB_FINGERDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public DB_FINGERDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public DB_FINGERDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<USERINFO> USERINFOs
		{
			get
			{
				return this.GetTable<USERINFO>();
			}
		}
		
		public System.Data.Linq.Table<TBL_T_SHIFTMAP> TBL_T_SHIFTMAPs
		{
			get
			{
				return this.GetTable<TBL_T_SHIFTMAP>();
			}
		}
		
		public System.Data.Linq.Table<TBL_T_EXTRACT_ABSEN> TBL_T_EXTRACT_ABSENs
		{
			get
			{
				return this.GetTable<TBL_T_EXTRACT_ABSEN>();
			}
		}
		
		public System.Data.Linq.Table<VW_KARYAWAN_ALL> VW_KARYAWAN_ALLs
		{
			get
			{
				return this.GetTable<VW_KARYAWAN_ALL>();
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.USERINFO")]
	public partial class USERINFO : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _USERID;
		
		private string _BADGENUMBER;
		
		private string _SSN;
		
		private string _NAME;
		
		private string _GENDER;
		
		private string _TITLE;
		
		private string _PAGER;
		
		private System.Nullable<System.DateTime> _BIRTHDAY;
		
		private System.Nullable<System.DateTime> _HIREDDAY;
		
		private string _STREET;
		
		private string _CITY;
		
		private string _STATE;
		
		private string _ZIP;
		
		private string _OPHONE;
		
		private string _FPHONE;
		
		private System.Nullable<short> _VERIFICATIONMETHOD;
		
		private System.Nullable<short> _DEFAULTDEPTID;
		
		private System.Nullable<short> _SECURITYFLAGS;
		
		private short _ATT;
		
		private short _INLATE;
		
		private short _OUTEARLY;
		
		private short _OVERTIME;
		
		private short _SEP;
		
		private short _HOLIDAY;
		
		private string _MINZU;
		
		private string _PASSWORD;
		
		private short _LUNCHDURATION;
		
		private string _MVerifyPass;
		
		private System.Data.Linq.Binary _PHOTO;
		
		private System.Data.Linq.Binary _Notes;
		
		private System.Nullable<int> _privilege;
		
		private System.Nullable<short> _InheritDeptSch;
		
		private System.Nullable<short> _InheritDeptSchClass;
		
		private System.Nullable<short> _AutoSchPlan;
		
		private System.Nullable<int> _MinAutoSchInterval;
		
		private System.Nullable<short> _RegisterOT;
		
		private System.Nullable<short> _InheritDeptRule;
		
		private System.Nullable<short> _EMPRIVILEGE;
		
		private string _CardNo;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnUSERIDChanging(int value);
    partial void OnUSERIDChanged();
    partial void OnBADGENUMBERChanging(string value);
    partial void OnBADGENUMBERChanged();
    partial void OnSSNChanging(string value);
    partial void OnSSNChanged();
    partial void OnNAMEChanging(string value);
    partial void OnNAMEChanged();
    partial void OnGENDERChanging(string value);
    partial void OnGENDERChanged();
    partial void OnTITLEChanging(string value);
    partial void OnTITLEChanged();
    partial void OnPAGERChanging(string value);
    partial void OnPAGERChanged();
    partial void OnBIRTHDAYChanging(System.Nullable<System.DateTime> value);
    partial void OnBIRTHDAYChanged();
    partial void OnHIREDDAYChanging(System.Nullable<System.DateTime> value);
    partial void OnHIREDDAYChanged();
    partial void OnSTREETChanging(string value);
    partial void OnSTREETChanged();
    partial void OnCITYChanging(string value);
    partial void OnCITYChanged();
    partial void OnSTATEChanging(string value);
    partial void OnSTATEChanged();
    partial void OnZIPChanging(string value);
    partial void OnZIPChanged();
    partial void OnOPHONEChanging(string value);
    partial void OnOPHONEChanged();
    partial void OnFPHONEChanging(string value);
    partial void OnFPHONEChanged();
    partial void OnVERIFICATIONMETHODChanging(System.Nullable<short> value);
    partial void OnVERIFICATIONMETHODChanged();
    partial void OnDEFAULTDEPTIDChanging(System.Nullable<short> value);
    partial void OnDEFAULTDEPTIDChanged();
    partial void OnSECURITYFLAGSChanging(System.Nullable<short> value);
    partial void OnSECURITYFLAGSChanged();
    partial void OnATTChanging(short value);
    partial void OnATTChanged();
    partial void OnINLATEChanging(short value);
    partial void OnINLATEChanged();
    partial void OnOUTEARLYChanging(short value);
    partial void OnOUTEARLYChanged();
    partial void OnOVERTIMEChanging(short value);
    partial void OnOVERTIMEChanged();
    partial void OnSEPChanging(short value);
    partial void OnSEPChanged();
    partial void OnHOLIDAYChanging(short value);
    partial void OnHOLIDAYChanged();
    partial void OnMINZUChanging(string value);
    partial void OnMINZUChanged();
    partial void OnPASSWORDChanging(string value);
    partial void OnPASSWORDChanged();
    partial void OnLUNCHDURATIONChanging(short value);
    partial void OnLUNCHDURATIONChanged();
    partial void OnMVerifyPassChanging(string value);
    partial void OnMVerifyPassChanged();
    partial void OnPHOTOChanging(System.Data.Linq.Binary value);
    partial void OnPHOTOChanged();
    partial void OnNotesChanging(System.Data.Linq.Binary value);
    partial void OnNotesChanged();
    partial void OnprivilegeChanging(System.Nullable<int> value);
    partial void OnprivilegeChanged();
    partial void OnInheritDeptSchChanging(System.Nullable<short> value);
    partial void OnInheritDeptSchChanged();
    partial void OnInheritDeptSchClassChanging(System.Nullable<short> value);
    partial void OnInheritDeptSchClassChanged();
    partial void OnAutoSchPlanChanging(System.Nullable<short> value);
    partial void OnAutoSchPlanChanged();
    partial void OnMinAutoSchIntervalChanging(System.Nullable<int> value);
    partial void OnMinAutoSchIntervalChanged();
    partial void OnRegisterOTChanging(System.Nullable<short> value);
    partial void OnRegisterOTChanged();
    partial void OnInheritDeptRuleChanging(System.Nullable<short> value);
    partial void OnInheritDeptRuleChanged();
    partial void OnEMPRIVILEGEChanging(System.Nullable<short> value);
    partial void OnEMPRIVILEGEChanged();
    partial void OnCardNoChanging(string value);
    partial void OnCardNoChanged();
    #endregion
		
		public USERINFO()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_USERID", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int USERID
		{
			get
			{
				return this._USERID;
			}
			set
			{
				if ((this._USERID != value))
				{
					this.OnUSERIDChanging(value);
					this.SendPropertyChanging();
					this._USERID = value;
					this.SendPropertyChanged("USERID");
					this.OnUSERIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_BADGENUMBER", DbType="VarChar(24) NOT NULL", CanBeNull=false)]
		public string BADGENUMBER
		{
			get
			{
				return this._BADGENUMBER;
			}
			set
			{
				if ((this._BADGENUMBER != value))
				{
					this.OnBADGENUMBERChanging(value);
					this.SendPropertyChanging();
					this._BADGENUMBER = value;
					this.SendPropertyChanged("BADGENUMBER");
					this.OnBADGENUMBERChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SSN", DbType="VarChar(20)")]
		public string SSN
		{
			get
			{
				return this._SSN;
			}
			set
			{
				if ((this._SSN != value))
				{
					this.OnSSNChanging(value);
					this.SendPropertyChanging();
					this._SSN = value;
					this.SendPropertyChanged("SSN");
					this.OnSSNChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NAME", DbType="VarChar(40)")]
		public string NAME
		{
			get
			{
				return this._NAME;
			}
			set
			{
				if ((this._NAME != value))
				{
					this.OnNAMEChanging(value);
					this.SendPropertyChanging();
					this._NAME = value;
					this.SendPropertyChanged("NAME");
					this.OnNAMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_GENDER", DbType="VarChar(8)")]
		public string GENDER
		{
			get
			{
				return this._GENDER;
			}
			set
			{
				if ((this._GENDER != value))
				{
					this.OnGENDERChanging(value);
					this.SendPropertyChanging();
					this._GENDER = value;
					this.SendPropertyChanged("GENDER");
					this.OnGENDERChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TITLE", DbType="VarChar(20)")]
		public string TITLE
		{
			get
			{
				return this._TITLE;
			}
			set
			{
				if ((this._TITLE != value))
				{
					this.OnTITLEChanging(value);
					this.SendPropertyChanging();
					this._TITLE = value;
					this.SendPropertyChanged("TITLE");
					this.OnTITLEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PAGER", DbType="VarChar(20)")]
		public string PAGER
		{
			get
			{
				return this._PAGER;
			}
			set
			{
				if ((this._PAGER != value))
				{
					this.OnPAGERChanging(value);
					this.SendPropertyChanging();
					this._PAGER = value;
					this.SendPropertyChanged("PAGER");
					this.OnPAGERChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_BIRTHDAY", DbType="DateTime")]
		public System.Nullable<System.DateTime> BIRTHDAY
		{
			get
			{
				return this._BIRTHDAY;
			}
			set
			{
				if ((this._BIRTHDAY != value))
				{
					this.OnBIRTHDAYChanging(value);
					this.SendPropertyChanging();
					this._BIRTHDAY = value;
					this.SendPropertyChanged("BIRTHDAY");
					this.OnBIRTHDAYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_HIREDDAY", DbType="DateTime")]
		public System.Nullable<System.DateTime> HIREDDAY
		{
			get
			{
				return this._HIREDDAY;
			}
			set
			{
				if ((this._HIREDDAY != value))
				{
					this.OnHIREDDAYChanging(value);
					this.SendPropertyChanging();
					this._HIREDDAY = value;
					this.SendPropertyChanged("HIREDDAY");
					this.OnHIREDDAYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STREET", DbType="VarChar(80)")]
		public string STREET
		{
			get
			{
				return this._STREET;
			}
			set
			{
				if ((this._STREET != value))
				{
					this.OnSTREETChanging(value);
					this.SendPropertyChanging();
					this._STREET = value;
					this.SendPropertyChanged("STREET");
					this.OnSTREETChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CITY", DbType="VarChar(2)")]
		public string CITY
		{
			get
			{
				return this._CITY;
			}
			set
			{
				if ((this._CITY != value))
				{
					this.OnCITYChanging(value);
					this.SendPropertyChanging();
					this._CITY = value;
					this.SendPropertyChanged("CITY");
					this.OnCITYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_STATE", DbType="VarChar(2)")]
		public string STATE
		{
			get
			{
				return this._STATE;
			}
			set
			{
				if ((this._STATE != value))
				{
					this.OnSTATEChanging(value);
					this.SendPropertyChanging();
					this._STATE = value;
					this.SendPropertyChanged("STATE");
					this.OnSTATEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ZIP", DbType="VarChar(12)")]
		public string ZIP
		{
			get
			{
				return this._ZIP;
			}
			set
			{
				if ((this._ZIP != value))
				{
					this.OnZIPChanging(value);
					this.SendPropertyChanging();
					this._ZIP = value;
					this.SendPropertyChanged("ZIP");
					this.OnZIPChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OPHONE", DbType="VarChar(20)")]
		public string OPHONE
		{
			get
			{
				return this._OPHONE;
			}
			set
			{
				if ((this._OPHONE != value))
				{
					this.OnOPHONEChanging(value);
					this.SendPropertyChanging();
					this._OPHONE = value;
					this.SendPropertyChanged("OPHONE");
					this.OnOPHONEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_FPHONE", DbType="VarChar(20)")]
		public string FPHONE
		{
			get
			{
				return this._FPHONE;
			}
			set
			{
				if ((this._FPHONE != value))
				{
					this.OnFPHONEChanging(value);
					this.SendPropertyChanging();
					this._FPHONE = value;
					this.SendPropertyChanged("FPHONE");
					this.OnFPHONEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_VERIFICATIONMETHOD", DbType="SmallInt")]
		public System.Nullable<short> VERIFICATIONMETHOD
		{
			get
			{
				return this._VERIFICATIONMETHOD;
			}
			set
			{
				if ((this._VERIFICATIONMETHOD != value))
				{
					this.OnVERIFICATIONMETHODChanging(value);
					this.SendPropertyChanging();
					this._VERIFICATIONMETHOD = value;
					this.SendPropertyChanged("VERIFICATIONMETHOD");
					this.OnVERIFICATIONMETHODChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DEFAULTDEPTID", DbType="SmallInt")]
		public System.Nullable<short> DEFAULTDEPTID
		{
			get
			{
				return this._DEFAULTDEPTID;
			}
			set
			{
				if ((this._DEFAULTDEPTID != value))
				{
					this.OnDEFAULTDEPTIDChanging(value);
					this.SendPropertyChanging();
					this._DEFAULTDEPTID = value;
					this.SendPropertyChanged("DEFAULTDEPTID");
					this.OnDEFAULTDEPTIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SECURITYFLAGS", DbType="SmallInt")]
		public System.Nullable<short> SECURITYFLAGS
		{
			get
			{
				return this._SECURITYFLAGS;
			}
			set
			{
				if ((this._SECURITYFLAGS != value))
				{
					this.OnSECURITYFLAGSChanging(value);
					this.SendPropertyChanging();
					this._SECURITYFLAGS = value;
					this.SendPropertyChanged("SECURITYFLAGS");
					this.OnSECURITYFLAGSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ATT", DbType="SmallInt NOT NULL")]
		public short ATT
		{
			get
			{
				return this._ATT;
			}
			set
			{
				if ((this._ATT != value))
				{
					this.OnATTChanging(value);
					this.SendPropertyChanging();
					this._ATT = value;
					this.SendPropertyChanged("ATT");
					this.OnATTChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_INLATE", DbType="SmallInt NOT NULL")]
		public short INLATE
		{
			get
			{
				return this._INLATE;
			}
			set
			{
				if ((this._INLATE != value))
				{
					this.OnINLATEChanging(value);
					this.SendPropertyChanging();
					this._INLATE = value;
					this.SendPropertyChanged("INLATE");
					this.OnINLATEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OUTEARLY", DbType="SmallInt NOT NULL")]
		public short OUTEARLY
		{
			get
			{
				return this._OUTEARLY;
			}
			set
			{
				if ((this._OUTEARLY != value))
				{
					this.OnOUTEARLYChanging(value);
					this.SendPropertyChanging();
					this._OUTEARLY = value;
					this.SendPropertyChanged("OUTEARLY");
					this.OnOUTEARLYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OVERTIME", DbType="SmallInt NOT NULL")]
		public short OVERTIME
		{
			get
			{
				return this._OVERTIME;
			}
			set
			{
				if ((this._OVERTIME != value))
				{
					this.OnOVERTIMEChanging(value);
					this.SendPropertyChanging();
					this._OVERTIME = value;
					this.SendPropertyChanged("OVERTIME");
					this.OnOVERTIMEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SEP", DbType="SmallInt NOT NULL")]
		public short SEP
		{
			get
			{
				return this._SEP;
			}
			set
			{
				if ((this._SEP != value))
				{
					this.OnSEPChanging(value);
					this.SendPropertyChanging();
					this._SEP = value;
					this.SendPropertyChanged("SEP");
					this.OnSEPChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_HOLIDAY", DbType="SmallInt NOT NULL")]
		public short HOLIDAY
		{
			get
			{
				return this._HOLIDAY;
			}
			set
			{
				if ((this._HOLIDAY != value))
				{
					this.OnHOLIDAYChanging(value);
					this.SendPropertyChanging();
					this._HOLIDAY = value;
					this.SendPropertyChanged("HOLIDAY");
					this.OnHOLIDAYChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_MINZU", DbType="VarChar(8)")]
		public string MINZU
		{
			get
			{
				return this._MINZU;
			}
			set
			{
				if ((this._MINZU != value))
				{
					this.OnMINZUChanging(value);
					this.SendPropertyChanging();
					this._MINZU = value;
					this.SendPropertyChanged("MINZU");
					this.OnMINZUChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PASSWORD", DbType="VarChar(20)")]
		public string PASSWORD
		{
			get
			{
				return this._PASSWORD;
			}
			set
			{
				if ((this._PASSWORD != value))
				{
					this.OnPASSWORDChanging(value);
					this.SendPropertyChanging();
					this._PASSWORD = value;
					this.SendPropertyChanged("PASSWORD");
					this.OnPASSWORDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_LUNCHDURATION", DbType="SmallInt NOT NULL")]
		public short LUNCHDURATION
		{
			get
			{
				return this._LUNCHDURATION;
			}
			set
			{
				if ((this._LUNCHDURATION != value))
				{
					this.OnLUNCHDURATIONChanging(value);
					this.SendPropertyChanging();
					this._LUNCHDURATION = value;
					this.SendPropertyChanged("LUNCHDURATION");
					this.OnLUNCHDURATIONChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_MVerifyPass", DbType="VarChar(10)")]
		public string MVerifyPass
		{
			get
			{
				return this._MVerifyPass;
			}
			set
			{
				if ((this._MVerifyPass != value))
				{
					this.OnMVerifyPassChanging(value);
					this.SendPropertyChanging();
					this._MVerifyPass = value;
					this.SendPropertyChanged("MVerifyPass");
					this.OnMVerifyPassChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PHOTO", DbType="Image", UpdateCheck=UpdateCheck.Never)]
		public System.Data.Linq.Binary PHOTO
		{
			get
			{
				return this._PHOTO;
			}
			set
			{
				if ((this._PHOTO != value))
				{
					this.OnPHOTOChanging(value);
					this.SendPropertyChanging();
					this._PHOTO = value;
					this.SendPropertyChanged("PHOTO");
					this.OnPHOTOChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Notes", DbType="Image", UpdateCheck=UpdateCheck.Never)]
		public System.Data.Linq.Binary Notes
		{
			get
			{
				return this._Notes;
			}
			set
			{
				if ((this._Notes != value))
				{
					this.OnNotesChanging(value);
					this.SendPropertyChanging();
					this._Notes = value;
					this.SendPropertyChanged("Notes");
					this.OnNotesChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_privilege", DbType="Int")]
		public System.Nullable<int> privilege
		{
			get
			{
				return this._privilege;
			}
			set
			{
				if ((this._privilege != value))
				{
					this.OnprivilegeChanging(value);
					this.SendPropertyChanging();
					this._privilege = value;
					this.SendPropertyChanged("privilege");
					this.OnprivilegeChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_InheritDeptSch", DbType="SmallInt")]
		public System.Nullable<short> InheritDeptSch
		{
			get
			{
				return this._InheritDeptSch;
			}
			set
			{
				if ((this._InheritDeptSch != value))
				{
					this.OnInheritDeptSchChanging(value);
					this.SendPropertyChanging();
					this._InheritDeptSch = value;
					this.SendPropertyChanged("InheritDeptSch");
					this.OnInheritDeptSchChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_InheritDeptSchClass", DbType="SmallInt")]
		public System.Nullable<short> InheritDeptSchClass
		{
			get
			{
				return this._InheritDeptSchClass;
			}
			set
			{
				if ((this._InheritDeptSchClass != value))
				{
					this.OnInheritDeptSchClassChanging(value);
					this.SendPropertyChanging();
					this._InheritDeptSchClass = value;
					this.SendPropertyChanged("InheritDeptSchClass");
					this.OnInheritDeptSchClassChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AutoSchPlan", DbType="SmallInt")]
		public System.Nullable<short> AutoSchPlan
		{
			get
			{
				return this._AutoSchPlan;
			}
			set
			{
				if ((this._AutoSchPlan != value))
				{
					this.OnAutoSchPlanChanging(value);
					this.SendPropertyChanging();
					this._AutoSchPlan = value;
					this.SendPropertyChanged("AutoSchPlan");
					this.OnAutoSchPlanChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_MinAutoSchInterval", DbType="Int")]
		public System.Nullable<int> MinAutoSchInterval
		{
			get
			{
				return this._MinAutoSchInterval;
			}
			set
			{
				if ((this._MinAutoSchInterval != value))
				{
					this.OnMinAutoSchIntervalChanging(value);
					this.SendPropertyChanging();
					this._MinAutoSchInterval = value;
					this.SendPropertyChanged("MinAutoSchInterval");
					this.OnMinAutoSchIntervalChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_RegisterOT", DbType="SmallInt")]
		public System.Nullable<short> RegisterOT
		{
			get
			{
				return this._RegisterOT;
			}
			set
			{
				if ((this._RegisterOT != value))
				{
					this.OnRegisterOTChanging(value);
					this.SendPropertyChanging();
					this._RegisterOT = value;
					this.SendPropertyChanged("RegisterOT");
					this.OnRegisterOTChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_InheritDeptRule", DbType="SmallInt")]
		public System.Nullable<short> InheritDeptRule
		{
			get
			{
				return this._InheritDeptRule;
			}
			set
			{
				if ((this._InheritDeptRule != value))
				{
					this.OnInheritDeptRuleChanging(value);
					this.SendPropertyChanging();
					this._InheritDeptRule = value;
					this.SendPropertyChanged("InheritDeptRule");
					this.OnInheritDeptRuleChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_EMPRIVILEGE", DbType="SmallInt")]
		public System.Nullable<short> EMPRIVILEGE
		{
			get
			{
				return this._EMPRIVILEGE;
			}
			set
			{
				if ((this._EMPRIVILEGE != value))
				{
					this.OnEMPRIVILEGEChanging(value);
					this.SendPropertyChanging();
					this._EMPRIVILEGE = value;
					this.SendPropertyChanged("EMPRIVILEGE");
					this.OnEMPRIVILEGEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CardNo", DbType="VarChar(20)")]
		public string CardNo
		{
			get
			{
				return this._CardNo;
			}
			set
			{
				if ((this._CardNo != value))
				{
					this.OnCardNoChanging(value);
					this.SendPropertyChanging();
					this._CardNo = value;
					this.SendPropertyChanged("CardNo");
					this.OnCardNoChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.TBL_T_SHIFTMAP")]
	public partial class TBL_T_SHIFTMAP : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _ID;
		
		private System.Nullable<int> _EMP_ID;
		
		private System.Nullable<System.DateTime> _START_DATE;
		
		private System.Nullable<System.DateTime> _END_DATE;
		
		private System.Nullable<int> _SHIFT_SCH_ID;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnIDChanging(int value);
    partial void OnIDChanged();
    partial void OnEMP_IDChanging(System.Nullable<int> value);
    partial void OnEMP_IDChanged();
    partial void OnSTART_DATEChanging(System.Nullable<System.DateTime> value);
    partial void OnSTART_DATEChanged();
    partial void OnEND_DATEChanging(System.Nullable<System.DateTime> value);
    partial void OnEND_DATEChanged();
    partial void OnSHIFT_SCH_IDChanging(System.Nullable<int> value);
    partial void OnSHIFT_SCH_IDChanged();
    #endregion
		
		public TBL_T_SHIFTMAP()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ID", DbType="Int NOT NULL", IsPrimaryKey=true)]
		public int ID
		{
			get
			{
				return this._ID;
			}
			set
			{
				if ((this._ID != value))
				{
					this.OnIDChanging(value);
					this.SendPropertyChanging();
					this._ID = value;
					this.SendPropertyChanged("ID");
					this.OnIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_EMP_ID", DbType="Int")]
		public System.Nullable<int> EMP_ID
		{
			get
			{
				return this._EMP_ID;
			}
			set
			{
				if ((this._EMP_ID != value))
				{
					this.OnEMP_IDChanging(value);
					this.SendPropertyChanging();
					this._EMP_ID = value;
					this.SendPropertyChanged("EMP_ID");
					this.OnEMP_IDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_START_DATE", DbType="Date")]
		public System.Nullable<System.DateTime> START_DATE
		{
			get
			{
				return this._START_DATE;
			}
			set
			{
				if ((this._START_DATE != value))
				{
					this.OnSTART_DATEChanging(value);
					this.SendPropertyChanging();
					this._START_DATE = value;
					this.SendPropertyChanged("START_DATE");
					this.OnSTART_DATEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_END_DATE", DbType="Date")]
		public System.Nullable<System.DateTime> END_DATE
		{
			get
			{
				return this._END_DATE;
			}
			set
			{
				if ((this._END_DATE != value))
				{
					this.OnEND_DATEChanging(value);
					this.SendPropertyChanging();
					this._END_DATE = value;
					this.SendPropertyChanged("END_DATE");
					this.OnEND_DATEChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SHIFT_SCH_ID", DbType="Int")]
		public System.Nullable<int> SHIFT_SCH_ID
		{
			get
			{
				return this._SHIFT_SCH_ID;
			}
			set
			{
				if ((this._SHIFT_SCH_ID != value))
				{
					this.OnSHIFT_SCH_IDChanging(value);
					this.SendPropertyChanging();
					this._SHIFT_SCH_ID = value;
					this.SendPropertyChanged("SHIFT_SCH_ID");
					this.OnSHIFT_SCH_IDChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.TBL_T_EXTRACT_ABSEN")]
	public partial class TBL_T_EXTRACT_ABSEN : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _PID;
		
		private string _USERID;
		
		private string _NAMA;
		
		private System.Nullable<System.DateTime> _TANGGAL;
		
		private System.Nullable<System.TimeSpan> _IN;
		
		private System.Nullable<System.TimeSpan> _OUT;
		
		private System.Nullable<int> _SHIFT;
		
		private string _DEPARTEMEN;
		
		private string _GROUPS;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnPIDChanging(int value);
    partial void OnPIDChanged();
    partial void OnUSERIDChanging(string value);
    partial void OnUSERIDChanged();
    partial void OnNAMAChanging(string value);
    partial void OnNAMAChanged();
    partial void OnTANGGALChanging(System.Nullable<System.DateTime> value);
    partial void OnTANGGALChanged();
    partial void OnINChanging(System.Nullable<System.TimeSpan> value);
    partial void OnINChanged();
    partial void OnOUTChanging(System.Nullable<System.TimeSpan> value);
    partial void OnOUTChanged();
    partial void OnSHIFTChanging(System.Nullable<int> value);
    partial void OnSHIFTChanged();
    partial void OnDEPARTEMENChanging(string value);
    partial void OnDEPARTEMENChanged();
    partial void OnGROUPSChanging(string value);
    partial void OnGROUPSChanged();
    #endregion
		
		public TBL_T_EXTRACT_ABSEN()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PID", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int PID
		{
			get
			{
				return this._PID;
			}
			set
			{
				if ((this._PID != value))
				{
					this.OnPIDChanging(value);
					this.SendPropertyChanging();
					this._PID = value;
					this.SendPropertyChanged("PID");
					this.OnPIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_USERID", DbType="VarChar(50)")]
		public string USERID
		{
			get
			{
				return this._USERID;
			}
			set
			{
				if ((this._USERID != value))
				{
					this.OnUSERIDChanging(value);
					this.SendPropertyChanging();
					this._USERID = value;
					this.SendPropertyChanged("USERID");
					this.OnUSERIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NAMA", DbType="VarChar(150)")]
		public string NAMA
		{
			get
			{
				return this._NAMA;
			}
			set
			{
				if ((this._NAMA != value))
				{
					this.OnNAMAChanging(value);
					this.SendPropertyChanging();
					this._NAMA = value;
					this.SendPropertyChanged("NAMA");
					this.OnNAMAChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TANGGAL", DbType="Date")]
		public System.Nullable<System.DateTime> TANGGAL
		{
			get
			{
				return this._TANGGAL;
			}
			set
			{
				if ((this._TANGGAL != value))
				{
					this.OnTANGGALChanging(value);
					this.SendPropertyChanging();
					this._TANGGAL = value;
					this.SendPropertyChanged("TANGGAL");
					this.OnTANGGALChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Name="[IN]", Storage="_IN", DbType="Time")]
		public System.Nullable<System.TimeSpan> IN
		{
			get
			{
				return this._IN;
			}
			set
			{
				if ((this._IN != value))
				{
					this.OnINChanging(value);
					this.SendPropertyChanging();
					this._IN = value;
					this.SendPropertyChanged("IN");
					this.OnINChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OUT", DbType="Time")]
		public System.Nullable<System.TimeSpan> OUT
		{
			get
			{
				return this._OUT;
			}
			set
			{
				if ((this._OUT != value))
				{
					this.OnOUTChanging(value);
					this.SendPropertyChanging();
					this._OUT = value;
					this.SendPropertyChanged("OUT");
					this.OnOUTChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SHIFT", DbType="Int")]
		public System.Nullable<int> SHIFT
		{
			get
			{
				return this._SHIFT;
			}
			set
			{
				if ((this._SHIFT != value))
				{
					this.OnSHIFTChanging(value);
					this.SendPropertyChanging();
					this._SHIFT = value;
					this.SendPropertyChanged("SHIFT");
					this.OnSHIFTChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DEPARTEMEN", DbType="VarChar(50)")]
		public string DEPARTEMEN
		{
			get
			{
				return this._DEPARTEMEN;
			}
			set
			{
				if ((this._DEPARTEMEN != value))
				{
					this.OnDEPARTEMENChanging(value);
					this.SendPropertyChanging();
					this._DEPARTEMEN = value;
					this.SendPropertyChanged("DEPARTEMEN");
					this.OnDEPARTEMENChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_GROUPS", DbType="VarChar(50)")]
		public string GROUPS
		{
			get
			{
				return this._GROUPS;
			}
			set
			{
				if ((this._GROUPS != value))
				{
					this.OnGROUPSChanging(value);
					this.SendPropertyChanging();
					this._GROUPS = value;
					this.SendPropertyChanged("GROUPS");
					this.OnGROUPSChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.VW_KARYAWAN_ALL")]
	public partial class VW_KARYAWAN_ALL
	{
		
		private int _USERID;
		
		private string _NIK;
		
		private string _NAME;
		
		private string _DEPTNAME;
		
		private string _GROUPS;
		
		public VW_KARYAWAN_ALL()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_USERID", DbType="Int NOT NULL")]
		public int USERID
		{
			get
			{
				return this._USERID;
			}
			set
			{
				if ((this._USERID != value))
				{
					this._USERID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NIK", DbType="VarChar(24) NOT NULL", CanBeNull=false)]
		public string NIK
		{
			get
			{
				return this._NIK;
			}
			set
			{
				if ((this._NIK != value))
				{
					this._NIK = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NAME", DbType="VarChar(40)")]
		public string NAME
		{
			get
			{
				return this._NAME;
			}
			set
			{
				if ((this._NAME != value))
				{
					this._NAME = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DEPTNAME", DbType="VarChar(30)")]
		public string DEPTNAME
		{
			get
			{
				return this._DEPTNAME;
			}
			set
			{
				if ((this._DEPTNAME != value))
				{
					this._DEPTNAME = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_GROUPS", DbType="VarChar(30)")]
		public string GROUPS
		{
			get
			{
				return this._GROUPS;
			}
			set
			{
				if ((this._GROUPS != value))
				{
					this._GROUPS = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
