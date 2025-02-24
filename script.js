// Mock Data
const materials = [
    { id: 1, title: 'Maths Notes', author: 'Prof. Smith', semester: '2' },
    { id: 2, title: 'Physics Lab Manual', author: 'Dr. Brown', semester: '3' },
  ];
  
  // Render Materials
  function renderMaterials() {
    const materialsGrid = document.getElementById('materials');
    materialsGrid.innerHTML = materials
      .map(
        (material) => `
        <div class="material-card">
          <h3>${material.title}</h3>
          <p>${material.author} - Semester ${material.semester}</p>
          <button onclick="downloadMaterial(${material.id})">Download</button>
        </div>
      `
      )
      .join('');
  }
  
  // Search Functionality
  document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredMaterials = materials.filter((material) =>
      material.title.toLowerCase().includes(query)
    );
    renderMaterials(filteredMaterials);
  });
  
  // Download Material
  function downloadMaterial(id) {
    const material = materials.find((m) => m.id === id);
    alert(`Downloading: ${material.title}`);
  }
  
  // Initial Render
  renderMaterials();

  // Mock Data for Study Partners
const partners = [
    { id: 1, name: 'Alice', interests: ['Math', 'Programming', 'Physics'] },
    { id: 2, name: 'Bob', interests: ['Programming', 'Web Development'] },
    { id: 3, name: 'Charlie', interests: ['Math', 'Data Science'] },
    { id: 4, name: 'Diana', interests: ['Physics', 'Chemistry'] },
  ];
  
  // Find Study Partners
  function findPartners(interests) {
    const interestList = interests.toLowerCase().split(',').map((i) => i.trim());
    return partners.filter((partner) =>
      partner.interests.some((interest) =>
        interestList.includes(interest.toLowerCase())
      )
    );
  }
  
  // Render Partner Results
  function renderPartners(partners) {
    const partnerResults = document.getElementById('partnerResults');
    partnerResults.innerHTML = partners
      .map(
        (partner) => `
        <div class="partner-card">
          <h3>${partner.name}</h3>
          <p>Interests: ${partner.interests.join(', ')}</p>
          <button onclick="connectWithPartner(${partner.id})">Connect</button>
        </div>
      `
      )
      .join('');
  }
  
  // Connect with Partner
  function connectWithPartner(id) {
    const partner = partners.find((p) => p.id === id);
    alert(`Connecting with ${partner.name}`);
  }
  
  // Handle Interest Form Submission
  document.getElementById('interestForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const interests = document.getElementById('interests').value;
    const matchedPartners = findPartners(interests);
    renderPartners(matchedPartners);
  });