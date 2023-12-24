﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.DlyaPrilozheniya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Акт приемки.
    /// </summary>
    // *** Start programmer edit section *** (АктПриемки CustomAttributes)

    // *** End programmer edit section *** (АктПриемки CustomAttributes)
    [AutoAltered()]
    [Caption("Акт приемки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("АктПриемкиE", new string[] {
            "НомерАкта as \'Номер акта\'",
            "ДатаПриемки as \'Дата приемки\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИОСотрудника as \'Принял\'",
            "Сотрудники.Должность",
            "Поставщики as \'Поставщики\'",
            "Поставщики.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Сотрудники.ФИОСотрудника",
            "Поставщики.Наименование"})]
    [AssociatedDetailViewAttribute("АктПриемкиE", "ТЧАктаПриемки", "ТЧАктаПриемкиE", true, "", "Т ч акта приемки", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("АктПриемкиE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИОСотрудника")]
    [MasterViewDefineAttribute("АктПриемкиE", "Поставщики", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("АктПриемкиL", new string[] {
            "НомерАкта as \'Номер акта\'",
            "ДатаПриемки as \'Дата приемки\'",
            "Сотрудники.ФИОСотрудника as \'Принял\'",
            "Поставщики.Наименование as \'Наименование\'"})]
    public class АктПриемки : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерАкта;
        
        private System.DateTime fДатаПриемки;
        
        private IIS.DlyaPrilozheniya.Сотрудники fСотрудники;
        
        private IIS.DlyaPrilozheniya.Поставщики fПоставщики;
        
        private IIS.DlyaPrilozheniya.DetailArrayOfТЧАктаПриемки fТЧАктаПриемки;
        
        // *** Start programmer edit section *** (АктПриемки CustomMembers)

        // *** End programmer edit section *** (АктПриемки CustomMembers)

        
        /// <summary>
        /// ДатаПриемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.ДатаПриемки CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.ДатаПриемки CustomAttributes)
        public virtual System.DateTime ДатаПриемки
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Get start)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Get start)
                System.DateTime result = this.fДатаПриемки;
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Get end)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Set start)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Set start)
                this.fДатаПриемки = value;
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Set end)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Set end)
            }
        }
        
        /// <summary>
        /// НомерАкта.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.НомерАкта CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.НомерАкта CustomAttributes)
        public virtual int НомерАкта
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Get start)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Get start)
                int result = this.fНомерАкта;
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Get end)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Set start)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Set start)
                this.fНомерАкта = value;
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Set end)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Set end)
            }
        }
        
        /// <summary>
        /// Акт приемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.Поставщики CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.Поставщики CustomAttributes)
        [PropertyStorage(new string[] {
                "Поставщики"})]
        [NotNull()]
        public virtual IIS.DlyaPrilozheniya.Поставщики Поставщики
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.Поставщики Get start)

                // *** End programmer edit section *** (АктПриемки.Поставщики Get start)
                IIS.DlyaPrilozheniya.Поставщики result = this.fПоставщики;
                // *** Start programmer edit section *** (АктПриемки.Поставщики Get end)

                // *** End programmer edit section *** (АктПриемки.Поставщики Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.Поставщики Set start)

                // *** End programmer edit section *** (АктПриемки.Поставщики Set start)
                this.fПоставщики = value;
                // *** Start programmer edit section *** (АктПриемки.Поставщики Set end)

                // *** End programmer edit section *** (АктПриемки.Поставщики Set end)
            }
        }
        
        /// <summary>
        /// Акт приемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.DlyaPrilozheniya.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Get start)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Get start)
                IIS.DlyaPrilozheniya.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Get end)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Set start)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Set end)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Акт приемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки CustomAttributes)
        public virtual IIS.DlyaPrilozheniya.DetailArrayOfТЧАктаПриемки ТЧАктаПриемки
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Get start)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Get start)
                if ((this.fТЧАктаПриемки == null))
                {
                    this.fТЧАктаПриемки = new IIS.DlyaPrilozheniya.DetailArrayOfТЧАктаПриемки(this);
                }
                IIS.DlyaPrilozheniya.DetailArrayOfТЧАктаПриемки result = this.fТЧАктаПриемки;
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Get end)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Set start)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Set start)
                this.fТЧАктаПриемки = value;
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Set end)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "АктПриемкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АктПриемкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АктПриемкиE", typeof(IIS.DlyaPrilozheniya.АктПриемки));
                }
            }
            
            /// <summary>
            /// "АктПриемкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АктПриемкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АктПриемкиL", typeof(IIS.DlyaPrilozheniya.АктПриемки));
                }
            }
        }
    }
}
