QUnit.test("Test de la présence des éléments sur la page", function(assert) {
    assert.ok(document.querySelector('.header-logo'), "Le logo du header est présent");
    assert.ok(document.querySelector('.container'), "Le container est présent");
    assert.ok(document.querySelector('.footer'), "Le footer est présent");
});
