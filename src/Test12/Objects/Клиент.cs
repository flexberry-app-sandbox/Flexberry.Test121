﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test12
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "КодК as \'Код К\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "Телефон as \'Телефон\'"})]
    [View("КлиентL", new string[] {
            "КодК as \'Код К\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "Телефон as \'Телефон\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодК;
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private int fТелефон;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Имя CustomAttributes)

        // *** End programmer edit section *** (Клиент.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Имя Get start)

                // *** End programmer edit section *** (Клиент.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Клиент.Имя Get end)

                // *** End programmer edit section *** (Клиент.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Имя Set start)

                // *** End programmer edit section *** (Клиент.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Клиент.Имя Set end)

                // *** End programmer edit section *** (Клиент.Имя Set end)
            }
        }
        
        /// <summary>
        /// КодК.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.КодК CustomAttributes)

        // *** End programmer edit section *** (Клиент.КодК CustomAttributes)
        public virtual int КодК
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.КодК Get start)

                // *** End programmer edit section *** (Клиент.КодК Get start)
                int result = this.fКодК;
                // *** Start programmer edit section *** (Клиент.КодК Get end)

                // *** End programmer edit section *** (Клиент.КодК Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.КодК Set start)

                // *** End programmer edit section *** (Клиент.КодК Set start)
                this.fКодК = value;
                // *** Start programmer edit section *** (Клиент.КодК Set end)

                // *** End programmer edit section *** (Клиент.КодК Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Отчество CustomAttributes)

        // *** End programmer edit section *** (Клиент.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Отчество Get start)

                // *** End programmer edit section *** (Клиент.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Клиент.Отчество Get end)

                // *** End programmer edit section *** (Клиент.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Отчество Set start)

                // *** End programmer edit section *** (Клиент.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Клиент.Отчество Set end)

                // *** End programmer edit section *** (Клиент.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Телефон CustomAttributes)

        // *** End programmer edit section *** (Клиент.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Телефон Get start)

                // *** End programmer edit section *** (Клиент.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Клиент.Телефон Get end)

                // *** End programmer edit section *** (Клиент.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Телефон Set start)

                // *** End programmer edit section *** (Клиент.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Клиент.Телефон Set end)

                // *** End programmer edit section *** (Клиент.Телефон Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Клиент.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Фамилия Get start)

                // *** End programmer edit section *** (Клиент.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Клиент.Фамилия Get end)

                // *** End programmer edit section *** (Клиент.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Фамилия Set start)

                // *** End programmer edit section *** (Клиент.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Клиент.Фамилия Set end)

                // *** End programmer edit section *** (Клиент.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Test12.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Test12.Клиент));
                }
            }
        }
    }
}
