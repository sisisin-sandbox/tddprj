using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using tddbc;

namespace UnitTestProject1
{
	[TestClass]
	public class UnitTest1
	{
		[TestMethod]
		public void TestMethod1()
		{
			var class1 = new Class1();
			Assert.AreEqual(class1.Hello(), "hello!");
		}
	}
}
