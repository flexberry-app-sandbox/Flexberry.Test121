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
    /// Товары.
    /// </summary>
    // *** Start programmer edit section *** (Товары CustomAttributes)

    // *** End programmer edit section *** (Товары CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварыE", new string[] {
            "КодТовара as \'Код товара\'",
            "Название as \'Название\'",
            "Количество as \'Количество\'"})]
    [View("ТоварыL", new string[] {
            "КодТовара as \'Код товара\'",
            "Название as \'Название\'",
            "Количество as \'Количество\'"})]
    public class Товары : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодТовара;
        
        private string fНазвание;
        
        private int fКоличество;
        
        // *** Start programmer edit section *** (Товары CustomMembers)

        // *** End programmer edit section *** (Товары CustomMembers)

        
        /// <summary>
        /// КодТовара.
        /// </summary>
        // *** Start programmer edit section *** (Товары.КодТовара CustomAttributes)

        // *** End programmer edit section *** (Товары.КодТовара CustomAttributes)
        public virtual int КодТовара
        {
            get
            {
                // *** Start programmer edit section *** (Товары.КодТовара Get start)

                // *** End programmer edit section *** (Товары.КодТовара Get start)
                int result = this.fКодТовара;
                // *** Start programmer edit section *** (Товары.КодТовара Get end)

                // *** End programmer edit section *** (Товары.КодТовара Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.КодТовара Set start)

                // *** End programmer edit section *** (Товары.КодТовара Set start)
                this.fКодТовара = value;
                // *** Start programmer edit section *** (Товары.КодТовара Set end)

                // *** End programmer edit section *** (Товары.КодТовара Set end)
            }
        }
        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Количество CustomAttributes)

        // *** End programmer edit section *** (Товары.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Количество Get start)

                // *** End programmer edit section *** (Товары.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (Товары.Количество Get end)

                // *** End programmer edit section *** (Товары.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Количество Set start)

                // *** End programmer edit section *** (Товары.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (Товары.Количество Set end)

                // *** End programmer edit section *** (Товары.Количество Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Название CustomAttributes)

        // *** End programmer edit section *** (Товары.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Название Get start)

                // *** End programmer edit section *** (Товары.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Товары.Название Get end)

                // *** End programmer edit section *** (Товары.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Название Set start)

                // *** End programmer edit section *** (Товары.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Товары.Название Set end)

                // *** End programmer edit section *** (Товары.Название Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыE", typeof(IIS.Test12.Товары));
                }
            }
            
            /// <summary>
            /// "ТоварыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыL", typeof(IIS.Test12.Товары));
                }
            }
        }
    }
}
