//modal vars:
const modal = document.querySelector(".modal-success");
const modalCloseBtn = document.querySelector(".success-btn")

const dummyData = {
    "image": ["https://images.unsplash.com/photo-1580094333632-438bdc04f79f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29zdGElMjByaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29zdGElMjByaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1552727131-5fc6af16796d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29zdGElMjByaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1552980870-139c7b393f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvc3RhJTIwcmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"],
    "category": ["אוכל", "ספורט", "החיים הטובים", "פוליטיקה"],
    "title": ["מונדיאל 2022", "כאן 11 משיקה סדרה חדשה", "השבעת הממשלה יצאה לדרך", "מתכון לשניצל"],
    "subtitle": ["אחרי כמעט 4 שנים, סוף סוף הושבעה ממשלה חדשה,האם הפעם היא תחזיק מעמד קדנציה שלמה", "בואו לגלות איך נראים החיים במחוז פרובנס בצרפת", "עמותת עטלף מבקשת מתנדבים שיעזרו בחילוץ עטלפים מבניין שקרס בבת ים", "מטוס אינדוזי נחת נחיתת חירום בפפואה גינאה, לפי התקשורת לא ידוע על נפגעים"],
    "credit": ["אסף מיטלמן", "אביב אלוש", "אפי נוה", "יוחאי ספונדר"]
}